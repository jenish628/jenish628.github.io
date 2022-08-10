const express = require('express');
var bodyParser = require('body-parser')

const { router } = require('./word');


const app = express()
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(router)

app.listen(3000, () => {



    console.log(`localh`)
})