import { Router } from 'express'
import productsRouter from './productsRoutes.js'
import cartsRouter from './cartsRoutes.js'
import usersRouter from './usersRoutes.js'

const apiRouter = Router()

apiRouter.use('/products', productsRouter)
apiRouter.use('/carts', cartsRouter)
apiRouter.use('/users', usersRouter)

export default apiRouter 