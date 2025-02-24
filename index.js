const express = require('express')
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const shopRoute = require('./routes/shop');
const adminRoute = require('./routes/add-product');
const conatctRoute = require('./routes/contactus');
const successRoute = require('./routes/success');

const errorcontroller = require('./controllers/404')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use(conatctRoute);
app.use(successRoute)
app.use(shopRoute);

app.use(errorcontroller.get404);

app.listen(3001)