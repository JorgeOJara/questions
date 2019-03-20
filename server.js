const express = require('express');
const fs = require('fs');
const xRay = require('x-ray-scraper');

var app = new express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

xRay('http://laffgaff.com/movie-trivia-questions-answers/','p',[{
    questions:'strong'
}]).write('questions.json');

xRay('http://laffgaff.com/movie-trivia-questions-answers/','p',[{
    answers:'.collapseomatic_content'
}]).write('answers.json');


app.get('/questions',(request,response)=>{

    // getting Questions And ANSWERS
      let Questions = fs.readFileSync('questions.json');
     
    let changeContentToJSonFormat = JSON.parse( Questions);
      response.send(changeContentToJSonFormat);
      response.end();
})

app.get('/answers',(request,response)=>{

    // getting Questions And ANSWERS
       let answers = fs.readFileSync('answers.json');
       let changeContentToJSonFormat = JSON.parse(answers);
         response.send(changeContentToJSonFormat);
          response.end();
})


app.listen(3000,()=>{
      console.log('server its running...');
})