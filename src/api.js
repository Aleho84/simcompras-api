import cluster from 'cluster'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import http from 'http'
import mongoStore from 'connect-mongo'
import morgan from 'morgan'
import passport from 'passport'
import path from 'path'
import { Server } from 'socket.io'
import session from 'express-session'

import connectMongoDB from './config/mongo-db.js'
import logger from './utils/logger.js'
import websockets from './config/websockets.js'

import apiRouter from './routes/apiRoutes.js'
import docRouter from './routes/docRoutes.js'
import indexRouter from './routes/indexRoutes.js'

import './config/passport-local.js'
import 'dotenv/config'

import {
    RUN_MODE,
    SECRET_STRING,
    MONGOOSE_URI,
    TIME_SESSION,
    PORT,
    __dirname
} from './config/constant.js'

// SERVER
logger.info(`🌱 ENVIRONMENT=${process.env.NODE_ENV}`)

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
    app.use(express.static(path.join(__dirname, '../public')))
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

    //VIEW
    app.set('views', path.join(__dirname, '../views/pages'))
    app.set('view engine', 'ejs')

    // error handler
    app.use(function (err, req, res, next) {
        // solo da detalles del error en modo "development"
        res.locals.message = err.message
        res.locals.error = process.env.NODE_ENV === 'development' ? err : {}
        res.status(err.status || 500)
        res.render('error')
    })

    // ROUTES
    app.use('/api', apiRouter)
    app.use('/doc', docRouter)
    app.use('/', indexRouter)

    // WEBSOCKET
    websockets(io)

    // MONGODB
    connectMongoDB()

    // HTTP SERVER
    const portNormalizer = normalizePort(PORT)
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
        logger.info(`💻 Server started on port ${PORT}. 🛠  Worker PID: ${process.pid}. MODO:${RUN_MODE}`)
    }
}