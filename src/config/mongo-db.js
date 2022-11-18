import mongoose from 'mongoose'
import logger from '../utils/logger.js'
import { MONGOOSE_URI } from './config/constant.js'

const config = {
    mongoDB: {
        URL: MONGOOSE_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}

export default async () => {
    try {
        await mongoose.connect(config.mongoDB.URL, config.mongoDB.options)
        logger.info('[MONGODB]: 💾 Connected to MongoDB')
    } catch (error) {
        logger.error(`[MONGODB]: ⚠ MongoDB Error: ${error}`)
    }
}