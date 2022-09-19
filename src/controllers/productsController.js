import { productsDao as api } from '../daos/index.js'

export const getProducts = async (req, res) => {
    try {
        const products = await api.getAll()
        if (products.length == 0) {
            res.status(404).json({ message: 'There are no products available' })
        } else {
            res.status(200).json(products)
        }
    } catch (err) {
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await api.get(req.params.id)
        product ? res.status(200).json(product) : res.status(404).json({ message: `Product not found. ID:${req.params.id}` })
    }
    catch (err) {
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const postProduct = async (req, res) => {
    try {
        const newProduct = await api.create(req.body)
        res.status(201).json({
            message: 'Product created successfully',
            product: newProduct
        })
    } catch (err) {
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const putProduct = async (req, res) => {
    try {
        const productUpdated = await api.update(req.params.id, req.body)
        productUpdated
            ? res.status(200).json({
                message: 'Product updated successfully',
                product: req.body
            })
            : res.status(404).json({ message: `Product not found. ID:${req.params.id}` })
    } catch (err) {
        res.status(500).json({ message: err.message, line: err.line })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const productDeleted = await api.delete(req.params.id)
        productDeleted
            ? res.status(200).json({
                message: 'Product deleted successfully',
                product: productDeleted
            })
            : res.status(404).json({ message: `Product not found. ID:${req.params.id}` })
    }
    catch (err) {
        res.status(500).json({ message: err.message, line: err.line })
    }
}