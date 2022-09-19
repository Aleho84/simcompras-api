import 'dotenv/config'

let productsDao
let cartsDao
let usersDao

switch (process.env.DB_MODE) {
  case 'mongoDB':
    import('./mongoDBUsers.js').then(({ MongoDBUsers }) => { usersDao = new MongoDBUsers() })
    import('./mongoDBProducts.js').then(({ MongoDBProducts }) => { productsDao = new MongoDBProducts() })
    import('./mongoDBCarts.js').then(({ MongoDBCarts }) => { cartsDao = new MongoDBCarts() })
    break

  default:
    throw new Error('DB_MODE not defined')
    break
}

export { productsDao, cartsDao, usersDao }