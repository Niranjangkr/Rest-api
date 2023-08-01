require('dotenv').config()
const connectDB = require('./db/connect')
const product = require('./models/product')
const data = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await product.deleteMany()
        await product.create(data)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

start()