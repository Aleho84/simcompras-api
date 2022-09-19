import cluster from 'cluster'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { fileURLToPath } from 'url'
import http from 'http'
import mongoStore from 'connect-mongo'
import morgan from 'morgan'
import os from 'os'
import passport from 'passport'
import path from 'path'
import { Server } from 'socket.io'
import session from 'express-session'

import connectMongoDB from './config/mongo-db.js'
import websockets from './config/websockets.js'

import logger from './utils/logger.js'

import apiRouter from './routes/apiRoutes.js'
import docRouter from './routes/docRoutes.js'

import './config/passport-local.js'
import 'dotenv/config'

// VARIABLES
const PORT = process.env.PORT || 8080
const RUN_MODE = process.env.RUN_MODE || 'fork'
const SECRET_STRING = process.env.SECRET_STRING || 'superSecretString'
const TIME_SESSION = process.env.TIME_SESSION || 60
const MONGOOSE_URI = process.env.MONGOOSE_URI || 'mongodb://localhost:27017/simcompras'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const nroCPUs = os.cpus().length

// SERVER
if (cluster.isPrimary && RUN_MODE === 'cluster') {
    logger.info(`🧮 Primary PID ${process.pid} is running. On port ${PORT}. MODO: ${RUN_MODE}.`)
    for (let i = 0; i < nroCPUs; i++) {
        cluster.fork() // crea un proceso por cada cpu disponible
    }
    cluster.on('exit', (worker, code, signal) => {
        logger.warn(`🛠 worker ${worker.process.pid} died`)
    })
} else {
    const app = express()
    const httpServer = http.createServer(app)
    const io = new Server(httpServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    })

    // MIDDLEWARES
    // app.use(morgan('dev'))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(express.static(path.join(__dirname, '/public')))
    app.use(cors({
        origin: '*',
        methods: 'GET, POST, PUT, DELETE, OPTIONS'
    }))
    app.use(cookieParser(SECRET_STRING))
    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: SECRET_STRING,
        store: mongoStore.create({
            mongoUrl: MONGOOSE_URI,
            ttl: 60 * TIME_SESSION
        })
    }))
    app.use(passport.initialize())
    app.use(passport.session())

    // ROUTES
    app.use('/api', apiRouter)
    app.use('/', docRouter)

    // WEBSOCKET
    websockets(io)

    // MONGODB
    connectMongoDB()

    // HTTP SERVER
    const portNormalizer = normalizePort(process.env.PORT || '8080')
    app.set('port', portNormalizer)
    const server = http.createServer(app)
    server.listen(portNormalizer)
    server.on('error', onError)
    server.on('listening', onListening)

    function normalizePort(val) {
        // normaliza un puerto en un numero, una cadena o un valor falso.
        const port = parseInt(val, 10)

        if (isNaN(port)) { return val }
        if (port >= 0) { return port }
        return false
    }

    function onError(error) {
        // event listener para HTTP server cuando devuelve "error"
        if (error.syscall !== 'listen') {
            throw error
        }

        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port

        switch (error.code) {
            case 'EACCES':
                logger.info(`Server HTTP: ${bind} requiere permisos elevados`)
                process.exit(1)
                break
            case 'EADDRINUSE':
                logger.info(`Server HTTP: ${bind} ya esta utilizado`)
                process.exit(1)
                break
            default:
                logger.info(`Server HTTP: Error al conectar: [${error}]`)
                throw error
        }
    }

    function onListening() {
        // event listener para HTTP server
        const addr = server.address()
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port
        logger.info(`💻 Server started on port ${PORT}. 🛠  Worker PID: ${process.pid}. MODO:${RUN_MODE} [${new Date().toLocaleString()}]`)
    }
}