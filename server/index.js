const express = require('express');
const app = express();
require('dotenv').config()
const PORT = 5000;


const router = require('./Routes/router')
const db = require('./config/connection')
const Notes = require('./model/model')
const helper = require('./helper/notesHelper')



// Middlewares 
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use()






app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
})
