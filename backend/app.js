const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

// dotenv
dotenv.config({path:'./config.env'});
const PORT = process.env.PRT;

// database connection
require('./db/conn');

app.use(express.json());
app.use(require('./router/auth'));
app.use(require('./router/donorRoute'));

//MiddleWare
const middleware = (req,res,next)=>{
    console.log('middleware hai ye');
    next();
}


// app.get('/',(req,res) => {
//     res.send('home from app.js');
// });
// app.get('/buy', (req,res) => {
//     res.send('buy');
// });
// app.get('/test', (req,res) => {
//     res.send('test');
// });
// app.get('/register', (req,res) => {
//     res.send('register');
// });
// app.get('/donor', (req,res) => {
//     res.send('donor');
// });
// app.get('/profile',middleware,  (req,res) => {
//     res.cookie("Test" ,'cook');
//     res.send('profile');
// });
// app.get('/cart',middleware,  (req,res) => {
//     res.send('cart');
// });
// app.get('/login',(req,res) => {
//     res.send('login');
// });
app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);
})