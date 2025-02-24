const express = require('express');

const router = express.Router();

const path = require('path');

let adminData = require('./add-product');
const product = adminData.product;

const rootDir = require('../util/path');

router.get('/', (req, res) => {
    res.render('shop',
        {
            prods: product,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: product.length > 0,
            activeShop: true,
            addproductCSS: true
        }
    )
});

module.exports = router;