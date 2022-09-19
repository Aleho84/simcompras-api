import MongoClass from '../containers/mongoClass.js'
import { usersSchema } from '../models/usersSchema.js'

export class MongoDBUsers extends MongoClass {
  constructor() {
    super('users', usersSchema);
  }

  async findByEmail(email) {
    try {
      const user = await this.collection.findOne({ email })
      return user
    } catch (err) {
      throw new Error(err)
    }
  }
}