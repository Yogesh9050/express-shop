exports.getContact = (req, res, next) =>{
    res.render('contact' , 
        {
            pageTitle: 'Contact Us',
            path: '/contact',
            mainCSS: true,
            addproductCSS: true,
            activeAddProduct: true
        }
    )
};

exports.postContact = (req, res) =>{
    res.redirect('/success');
}