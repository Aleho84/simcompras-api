import mongoose from 'mongoose'
import logger from '../utils/logger.js'

class MongoClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema)
  }

  async getAll() {
    try {
      const all = await this.collection.find({})
      return all
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  async get(id) {
    try {
      const one = await this.collection.findById(id)
      return one
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  async create(doc) {
    try {
      const newDoc = await this.collection.create(doc)
      logger.info(`Add: ${JSON.stringify(doc, null, 2)}`)
      return newDoc
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  async update(id, doc) {
    try {
      const updatedDoc = await this.collection.findByIdAndUpdate(id, doc)
      logger.info(`Update: ${JSON.stringify(doc, null, 2)}`)
      return updatedDoc
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }

  async delete(id) {
    try {
      const deletedDoc = await this.collection.findByIdAndDelete(id)
      logger.info(`Delete: ${id}`)
      return deletedDoc
    } catch (err) {
      logger.error(err)
      throw new Error(err)
    }
  }
}

export default MongoClass