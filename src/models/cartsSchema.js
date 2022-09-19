import mongoose from "mongoose"

export const cartsSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "productsSchema"
            },
            amount: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ]
})