let product = [];

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', 
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            mainCSS: true,
            addproductCSS: true,
            activeAddProduct: true
        }
    );
};

exports.postAddProducts = (req, res) => {
    console.log(req.body);
    product.push({ product : req.body.product})
    res.redirect('/');
};

exports.getProducts = (req, res) => {
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
}