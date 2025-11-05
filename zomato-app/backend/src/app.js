// To create the server

const express = require('express');
const app= express(); //here i have created the server which needs to be exported to server.js file so that we can start it

app.get("/",(req,res)=>{
    res.send("Hello World");
})

module.exports = app;