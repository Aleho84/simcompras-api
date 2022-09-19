import mongoose from 'mongoose'
import logger from '../utils/logger.js'
import 'dotenv/config'

const MONGOOSE_URI = process.env.MONGOOSE_URI || 'mongodb://localhost:27017/simcompras'

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
        logger.info('💾 Connected to MongoDB')
    } catch (error) {
        logger.error(`⚠ MongoDB Error: ${error}`)
    }
}