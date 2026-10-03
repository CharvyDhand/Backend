require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/twitter', (req,res) => {
    res.send('this is twitter')
})

app.get('/insta', (req,res) => {
    res.send(`<h1>this is instagram</h1>`)
})

const port1 = process.env.PORT
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(port1 , () => {
    console.log(`Example app listening on port ${port1}`)
})