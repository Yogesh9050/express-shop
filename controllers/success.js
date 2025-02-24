exports.getSuccess = (req, res, next) =>{
    res.render('success' , 
        {
            pageTitle: 'Success',
            path: '/success',
            mainCSS: true,
            addproductCSS: true,
            activeAddProduct: true
        }
    )
};