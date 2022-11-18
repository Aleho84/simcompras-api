import winston from 'winston'
import path, { format } from 'path'
import 'dotenv/config'
import {
    NODE_ENV,
    __filename,
    __dirname
} from '../config/constant.js'

function loggerProd() {
    return winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.printf(info => `[${info.timestamp}] - ${info.level} - ${info.message}`)
        ),
        transports: [
            new winston.transports.File({
                filename: path.join(__dirname, '../logs/error.log'),
                level: 'error'
            }),
            new winston.transports.File({
                filename: path.join(__dirname, '../logs/info.log')
            }),
            new winston.transports.Console()
        ]
    })
}

function loggerDev() {
    return winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.printf(info => `[${info.timestamp}] - ${info.level}: ${info.message}`)
        ),
        transports: [
            new winston.transports.Console()
        ]
    })
}

let logger = null

if (NODE_ENV === 'production') {
    logger = loggerProd()
} else {
    logger = loggerDev()
}

export default logger