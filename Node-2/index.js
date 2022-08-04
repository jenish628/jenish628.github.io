

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));


app.get("/",(req,resp) => {
    const dirName = path.dirname(__dirname)
    console.log(dirName)
    resp.sendFile(`${dirName}/Node-2/calc.html`)

})
const getHtmlValue = (value) => {
    return `
        <div>
            Your result is : ${value} <br/>

            Goto Home Page <a href ="http://localhost:8000">GoToHome Page</a>
        </div>
    `
}
app.post("/calculator",(req,resp) => {
    const num1 = parseInt(req.body.first)
    const num2 = parseInt(req.body.second)
    const operation = req.body.operationName
    switch(operation) {

        case "add":
            resp.send(getHtmlValue(num1+num2))
        break

        case "sub":
            resp.send(getHtmlValue(num1-num2))
            break;

        case "mul":
            resp.send(getHtmlValue(num1*num2))
            break;
        case "divide":
            resp.send(getHtmlValue(num1/num2))
            break;
    }

})

app.listen(8000)

