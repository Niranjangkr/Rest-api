const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: [true, "Price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: String,
        default: Date.now()
    },
    company: {
        type: String,
        // enum: {
        //     values: ["ToeAnimation", "studio ghibli", "Mappa", "Bones"],
        //     message: `{VALUE} is not supported`,
        // }
    },
    img: {
        type: String,
        default:""
    },
})

module.exports = mongoose.model("Product", productsSchema)