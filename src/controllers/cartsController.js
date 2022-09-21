import { cartsDao as api } from '../daos/index.js'
import logger from '../utils/logger.js'

export const getCarts = async (req, res) => {
    try {
        const carts = await api.getAll()
        if (carts.length == 0) {
            res.status(404).json({ message: 'There are no carts available' })
        } else {
            res.status(200).json(carts)
        }
    } catch (err) {
        logger.error(err)
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const getCartById = async (req, res) => {
    try {
        const cart = await api.get(req.params.id)
        cart ? res.status(200).json(cart) : res.status(404).json({ message: `Cart not found. ID:${req.params.id}` })
    } catch (err) {
        logger.error(err)
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const postCart = async (req, res) => {
    try {
        const newCart = await api.create({})
        console.log(req.body)
        res.status(201).json({
            message: 'Cart created successfully',
            cart: newCart
        })
    } catch (err) {
        logger.error(err)
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const postProductsCart = async (req, res) => {
    try {
        const cart = await api.get(req.params.id)
        const addProducts = req.body
        if (cart && (addProducts || addProducts.length != 0)) {
            const updateCart = await api.addProducts(cart, addProducts)
            const newCart = await api.get(updateCart._id);
            res.status(201).json({
                message: 'Products added successfully',
                cart: newCart,
            })
        }
        if (!cart) {
            res.status(404).json({ message: `Cart not found. ID:${req.params.id}` })
        }
        if (!addProducts || addProducts.length == 0) {
            res.status(404).json({ message: 'The product list is empty' })
        }
    } catch (err) {
        logger.error(err)
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const getProductsCart = async (req, res) => {
    try {
        const carts = await api.get(req.params.id)
        carts
            ? res.status(200).json(carts.products)
            : res.status(404).json({ message: `Cart not found. ID:${req.params.id}` })
    } catch (err) {
        logger.error(err)
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const deleteProductsCart = async (req, res) => {
    try {
        const cart = await api.get(req.params.id)
        const productId = req.params.productId
        if (cart && productId) {
            const cartUpdated = await api.deleteProduct(cart, productId)
            const newCart = await api.get(cartUpdated._id)
            res.status(200).json({
                message: 'Product removed successfully',
                cart: newCart
            })
        }
        if (!cart) {
            res.status(404).json({ message: `Cart not found. ID:${req.params.id}` })
        }
        if (!productId) {
            res.status(404).json({ message: `The product ID:${req.params.id} does not exist` })
        }
    } catch (err) {
        logger.error(err)
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const deleteCart = async (req, res) => {
    try {
        const cartDeleted = await api.delete(req.params.id)
        cartDeleted
            ? res.status(200).json({
                message: 'Cart deleted successfully',
                cart: cartDeleted
            })
            : res.status(404).json({ message: `Cart not found. ID:${req.params.id}` })
    } catch (err) {
        logger.error(err)
        res.status(500).json({ message: err.message, line: err.line })
    }
}