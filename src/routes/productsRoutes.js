import { Router } from 'express'
const productsRouter = Router()

import {
    getProducts,
    postProduct,
    getProductById,
    putProduct,
    deleteProduct
} from '../controllers/productsController.js'

productsRouter.get('/', getProducts)
productsRouter.get('/:id', getProductById)
productsRouter.post('/', postProduct)
productsRouter.put('/:id', putProduct)
productsRouter.delete('/:id', deleteProduct)

export default productsRouter