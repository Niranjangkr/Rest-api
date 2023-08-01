const product = require('../models/product');
const { param } = require('../routes/products');

const getAllProducts = async (req, res) => {
    try {
        const { company, name, featured, sort, select } = req.query
        
        const queryObject = {}
        if(company){
            queryObject.company = {$regex: company, $options: 'i'}
            // console.log(queryObject)
        }

        if(name){
            queryObject.name = {$regex: name, $options: `i`}
        }

        if (featured){
            queryObject.featured = featured
        }
        
        let apiData = product.find(queryObject) 

        if(select){
            const fixSelcet = select.replace(",", " ") 
            console.log(fixSelcet)
            apiData = product.find(queryObject).select(fixSelcet)
        }

        if(sort){
            const fixSort = sort.replace(",", " ")
            console.log(fixSort)
            apiData = product.find(queryObject).sort(fixSort)
        }
        console.log(queryObject)
        const data = await apiData; //its like reular expression only if you dont include any query it  will still work and will fetch all the data
        // console.log(data)
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({"error":"Internal server error"})
    }
};
    const getProductByQuery = async (req, res) => {
        try {
            const data = await product.find(req.query)
            console.log(req.query)
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json({"error":error})
        }
    }

// this is not the right way to sort and get the data one should use request.query method for sorting filtering and pagination 
const getProductByNameLetter = async (req, res) => {
    try {
        const { letter }  =  req.params;
        const data = await product.find({name: {$regex: `^${letter}`, $options: `i`}})
        res.status(201).json(data)
    } catch (error) {
        console.log("hi");
        res.status(500).json({"error": error})
    }
}

    const getAllProductsTesting = async (req, res) => {
        const myData = await product.find({"company": "Apple"})
        res.status(200).json({myData})
    };

module.exports = {   getAllProducts, getAllProductsTesting, getProductByNameLetter, getProductByQuery}