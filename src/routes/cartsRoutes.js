import { Router } from 'express'
const cartsRouter = Router()

import {
    getCarts,
    getCartById,
    postCart,
    getProductsCart,
    postProductsCart,
    deleteProductsCart
} from '../controllers/cartsControllers.js'

cartsRouter.get('/', getCarts)
cartsRouter.get('/:id', getCartById)
cartsRouter.post('/', postCart)
cartsRouter.get('/:id/products', getProductsCart)
cartsRouter.post('/:id/products', postProductsCart)
cartsRouter.delete('/:id/products/:productId', deleteProductsCart)

export default cartsRouter