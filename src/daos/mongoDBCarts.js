import MongoClass from '../containers/mongoClass.js'
import { cartsSchema } from '../models/cartsSchema.js'
import logger from '../utils/logger.js'

export class MongoDBCarts extends MongoClass {
    constructor() {
        super('carts', cartsSchema)
    }

    // sobreescribe el metodo getAll para utilizar populate
    async getAll() {
        try {
            const carts = await this.collection
                .find({})
                .populate({
                    path: 'products',
                    populate: { path: '_id', model: 'products' }
                })
            return carts
        } catch (err) {
            logger.error(err)
            throw new Error(err)
        }
    }

    // sobreescribe el metodo get para utilizar populate
    async get(id) {
        try {
            const cart = await this.collection
                .findById(id)
                .populate({
                    path: 'products',
                    populate: { path: '_id', model: 'products' }
                })
            return cart
        } catch (err) {
            logger.error(err)
            throw new Error(err)
        }
    }

    async addProducts(cart, addProducts) {
        addProducts.forEach((product) => {
            const productsInCart = cart.products.find(
                p => p._id._id == product._id
            )
            if (productsInCart) {
                productsInCart.amount++
            } else {
                cart.products.push(product._id)
            }
        })
        const cartUpdated = await this.collection.findByIdAndUpdate(
            cart._id,
            { products: cart.products }
        )
        return cartUpdated
    }

    async deleteProduct(cart, productId) {
        const productInCart = cart.products.find(
            p => p._id._id == productId
        )
        if (productInCart) {
            productInCart.amount > 1
                ? productInCart.amount--
                : (cart.products = cart.products.filter(
                    (p) => p._id._id != productId
                ))
        } else {
            throw new Error('The product is not in the cart')
        }
        const cartUpdated = await this.collection.findByIdAndUpdate(
            cart._id,
            { products: cart.products }
        )
        return cartUpdated
    }
}