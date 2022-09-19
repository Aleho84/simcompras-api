import mongoose from "mongoose"

export const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    code: {
        type: String,
        default: ''
    },
    thumbnail: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    }
})