const express = require('express');
const data = require('./data.js');
const cList = require('./completed-list.js');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
// const expressValidator = require('express-validator')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

function pushToArray(string, num){
  let tempTask =
  {'task': string,
   'id': ''+num };
  return tempTask;
}


app.get('/',function(req, res){

  res.render('index', {listItems: data.listItems,
  completeList: cList.completeList});
});

app.post('/',function(req, res){
    let num = data.listItems.length;
    let nextTask = pushToArray(req.body.todoInput,num);

    data.listItems.push(nextTask);
    res.redirect('/');
});

app.listen(3000, function(req, res){
  console.log("You've gotten your port to listen.");
});








// let cheese = {'task': 'get cheese'}
// data.listItems.push(cheese);
