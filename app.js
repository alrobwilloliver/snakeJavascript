const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const app = express();
const port = 3000;

app.use('/public', express.static('./public/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log('Connected')
})