const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../util/path');

let product = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', 
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            mainCSS: true,
            addproductCSS: true,
            activeAddProduct: true
        }
    );
});

router.post('/add-product', (req, res) => {
    console.log(req.body);
    product.push({ product : req.body.product})
    res.redirect('/');
})

module.exports = {
    router,
    product
};