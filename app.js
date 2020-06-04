const express = require('express');
const app = express();
const port = 3000;

app.use('/public', express.static('./public/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/leaderboard', (req, res) => {
    res.sendFile(__dirname + '/leaderboard.html')
})

app.listen(process.env.PORT || port, () => {
    console.log('Connected')
})