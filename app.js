require("dotenv").config();
const express = require('express');
const app = express();
const products_route = require('./routes/products')
const connectDB = require('./db/connect')

app.use(express.json())
app.get('/', (req, res) => {
    res.json({"hii": "This is home page"})
})

// middleware or to set the router
app.use('/api/products', products_route)
    
const PORT = process.env.PORT || 3000
const start = async () => {
   try {
    await connectDB(process.env.MONGODB_URL)
    
    app.listen(PORT, () => {
        console.log(`listening at port ${PORT}`)
    })
   } catch (error) {
        console.log(error)
   }
}

start()