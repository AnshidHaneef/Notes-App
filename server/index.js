const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors')
const PORT = 5000;


const router = require('./Routes/router')
const db = require('./config/connection')


// Middlewares 
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/server/router', router)


app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`);
})
