const express = require('express');
const app = express();

const db = require('./db');   // make sure db.js connects mongoose

const bodyParser= require('body-parser');


  // make sure Person.js exports a model
const MenuItem = require('./Menu')
// Middleware to parse JSON body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my hotel! How can I help you? We have a list of menus.');
});





const personRoutes =require('./Routes/personRoutes');
const menuRoutes=require('./Routes/menuItemRoutes');

app.use('/person',personRoutes)
app.use('/Menu',menuRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
