import { Router } from 'express'
import { isAuth } from '../utils/isAuth.js'
const cartsRouter = Router()

import {
    getCarts,
    getCartById,
    postCart,
    getProductsCart,
    postProductsCart,
    deleteProductsCart,
    deleteCart
} from '../controllers/cartsControllers.js'

cartsRouter.get('/', isAuth, getCarts)
cartsRouter.get('/:id', isAuth, getCartById)
cartsRouter.get('/:id/products', isAuth, getProductsCart)
cartsRouter.post('/', isAuth, postCart)
cartsRouter.post('/:id/products', isAuth, postProductsCart)
cartsRouter.delete('/:id/products/:productId', isAuth, deleteProductsCart)
cartsRouter.delete('/:id', isAuth, deleteCart)

export default cartsRouter