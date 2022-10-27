import { Router } from 'express'
import { isAuth } from '../utils/isAuth.js'

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
productsRouter.post('/', isAuth, postProduct)
productsRouter.put('/:id', isAuth, putProduct)
productsRouter.delete('/:id', isAuth, deleteProduct)

export default productsRouter