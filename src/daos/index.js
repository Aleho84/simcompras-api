import { DB_MODE } from '../config/constant.js'
import logger from '../utils/logger.js'
import 'dotenv/config'

let productsDao
let cartsDao
let usersDao

switch (DB_MODE) {
  case 'mongoDB':
    import('./mongoDBUsers.js').then(({ MongoDBUsers }) => { usersDao = new MongoDBUsers() })
    import('./mongoDBProducts.js').then(({ MongoDBProducts }) => { productsDao = new MongoDBProducts() })
    import('./mongoDBCarts.js').then(({ MongoDBCarts }) => { cartsDao = new MongoDBCarts() })
    break

  default:
    const errMsg = '⚠ DB_MODE not defined'
    logger.error(errMsg)
    throw new Error(errMsg)
    break
}

export { productsDao, cartsDao, usersDao }