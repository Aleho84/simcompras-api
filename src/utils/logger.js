import winston from 'winston'
import 'dotenv/config'

function loggerProd() {
    return winston.createLogger({
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'info.log' })
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