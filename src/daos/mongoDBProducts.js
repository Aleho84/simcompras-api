import MongoClass from '../containers/mongoClass.js'
import { productsSchema } from '../models/productsSchema.js'

export class MongoDBProducts extends MongoClass {
    constructor() {
        super('products', productsSchema)
    }
}