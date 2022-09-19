import winston from 'winston'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function loggerProd() {
    return winston.createLogger({
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: path.join(__dirname, '../public/logs/error.log'), level: 'error' }),
            new winston.transports.File({ filename: path.join(__dirname, '../public/logs/info.log') })
        ]
    })
}

function loggerDev() {
    return winston.createLogger({
        format: winston.format.json(),
        transports: [
            new winston.transports.Console({ format: winston.format.simple() })
        ]
    })
}

let logger = null

if (process.env.NODE_ENV === 'PROD') {
    logger = loggerProd()
    logger.info('logger in production mode.')
} else {
    logger = loggerDev()
    logger.info('logger in development mode.')
}

export default logger