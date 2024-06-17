
require('dotenv').config()
// console.log(process.env)
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')

})
app.get("/rakib",(req, res) => {
    res.json({
        msg: "Hello World"
    })
})
app.get("/hasan",(req, res) => {
    res.json({
        msg: "Hello World hasan"
    })
})

app.listen(process.env.PORT, function (req, res) {
    console.log(`listening on port  ${process.env.PORT}`)
  })