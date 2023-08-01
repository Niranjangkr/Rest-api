const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductsTesting, getProductByNameLetter, getProductByQuery} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);
router.route('/isproduct').get(getProductByQuery)

// write routes which are not descriptive at the bottom cause they might cause conflict then 
// Express treats /:letter as a parameterized route, so it tries to match any request with a single segment (e.g., /testing) as the value of :letter. 
router.route('/:letter').get(getProductByNameLetter);

module.exports = router