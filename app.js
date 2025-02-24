const express = require('express')
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

const shopRoute = require('./routes/shop');
const adminRoute = require('./routes/add-product');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute)
app.use(shopRoute);

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3001)