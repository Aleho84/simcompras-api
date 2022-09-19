import mongoose from "mongoose"

export const MenssageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usersSchema"
    }
})