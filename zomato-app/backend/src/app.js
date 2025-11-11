// To create the server

const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');

const app= express(); //here i have created the server which needs to be exported to server.js file so that we can start it
app.use(cookieParser());
app.use(express.json()); //server uses this middleware to fetch the data from the frontend---> it get the data to req.body and convert the data into readable form

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);


module.exports = app;