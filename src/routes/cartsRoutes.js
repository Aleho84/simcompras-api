import { Router } from 'express'
import { isAuth } from '../utils/isAuth.js'
const cartsRouter = Router()

import {
    getCarts,
    getCartById,
    postCart,
    getProductsCart,
    postProductsCart,
    deleteProductsCart
} from '../controllers/cartsControllers.js'

cartsRouter.get('/',  getCarts)
cartsRouter.get('/:id',  getCartById)
cartsRouter.post('/', isAuth, postCart)
cartsRouter.get('/:id/products', getProductsCart)
cartsRouter.post('/:id/products', isAuth, postProductsCart)
cartsRouter.delete('/:id/products/:productId', isAuth, deleteProductsCart)

export default cartsRouter