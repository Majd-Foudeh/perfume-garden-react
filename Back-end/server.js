const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouts = require('./routes/userrouter')

const PORT = process.env.PORT

const dburl = process.env.DBURL

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use(userRouts)

module.exports = {
    server: app,
    start: () => {
        mongoose
            .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('connected to mongodb');
            })
            .then(() => {
                app.listen(PORT, () => {
                    console.log(`server is running on port ${PORT}`);
                })
            })
            .catch((err) => {
                'error connecting to mongo db ', err
            })

    }
}