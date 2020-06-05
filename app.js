const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Score = require('./public/model/scoreModel')

app.use('/public', express.static('./public/'))
app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
    limit: '10kb'
}))

app.get('/', (req, res) => {



    res.sendFile(__dirname + '/index.html')
})

app.get('/leaderboard', (req, res) => {

    // Score.find

    res.sendFile(__dirname + '/leaderboard.html')
})

app.post('/', async (req, res) => {
    // console.log(req.body);
    const score = new Score({ name: req.body.name, score: req.body.score });

    await score.save(function (err) {
        if (err) return handleError(err);
    })

    res.status(201).json({
        status: "success",
        score: score
    })
})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB Connection Successful!'))

app.listen(process.env.PORT || port, () => {
    console.log('Connected')
})