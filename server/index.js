const express = require('express');
const app = express();
require('dotenv').config()
const PORT = 5000;

const db = require('./config/connection')
const Notes = require('./model/model')

// Middlewares 
app.use(express.json())


// Routes
app.get('/',(req,res)=>{
    res.status(200).send('Express App Started ..');
})

app.post('/Note',(req,res)=>{
    console.log(req.body);
    res.json()
})


app.listen(PORT,()=>{
    console.log(`it's alive on http://localhost:${PORT}`);
})
