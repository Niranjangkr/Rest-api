const mongoose = require('mongoose')

const connectDB = (uri) =>{
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("connection start")).catch((error) => console.log(error))
}

module.exports = connectDB