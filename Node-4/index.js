const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname,"views")));

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }))

let userScore = 0;
let questionCount = 0;

const questionList =  [
    "3,1,4,1,5",
    "1,1,2,3,5, ",
    "1,4,9,16,25",
    "2,4,5,7,11",
    "1,2,4,8,16"
]


const answerList = [9,8,36,13,32]


app.get("/",(req,resp) => {
    if(questionCount < 5) {
        resp.render('index', 
        { question: questionList[questionCount],
             userScore: userScore});
    }else
    resp.render('userscore', {userScore:userScore})
  
})


app.post("/checkAnswer",(req,resp) => {
    const userAnswer = parseInt(req.body.userAnswer)
    const getPredefiendAnswer = parseInt(answerList[questionCount])   

    if(userAnswer === getPredefiendAnswer){
        userScore++;
    }
    questionCount++;
    resp.redirect('/')

})



app.listen(3000,() => {
    console.log(`your application is running on 3000 port`)
})