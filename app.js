
//for all kind of requests accepts
// var express = require('express');
// var app = new express();
// app.all('/',function(req, res){
//     res.send("Hello sumesh babu Have a nice2");
// });
// app.listen(3003, function(){
//     console.log('listening to port 3003');
// });


//for  accepting get request only
// var express = require('express');
// var app = new express();
// app.get('/',function(req, res){
//     res.send("Hello world");
// });

// app.listen(3004, function(){
//     console.log('listening to port 3004');
// });


// for chalk implementation
// const express = require('express');
// const chalk = require('chalk');
// var app = new express();

// app.get('/',function(req, res){
//     res.sendFile(__dirname+"/src/views/index.html");
// });

// app.listen(3006, function(){
//     console.log('listening to port '+ chalk.green('3006'));
// });

// // apply css by linking
// const express = require('express');
// const chalk = require('chalk');
// const path = require('path');

// var app = new express();
// app.use(express.static(path.join(__dirname,"/public")));

// app.get('/',function(req, res){
//     res.sendFile(path.join(__dirname,"src/views/index.html"));
// });

// app.listen(3007, function(){
//     console.log('listening to port '+ chalk.green('3007'));
// });

// apply js in html 
//rename index.html as index.ejs
const express = require('express');
const chalk = require('chalk');
const path = require('path');


var nav=[
    {link:'/books',title:'Books'},
    {link:'/authors',title:'Authors'}
]
var app = new express();
var booksRouter=require('./src/routs/bookrouts.js')(nav);//for use books




app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);

app.use(express.static(path.join(__dirname,"/public")));



app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/',function(req, res){
    res.render('index.ejs',
{
title:"Library",
nav
});
});

app.listen(3008, function(){
    console.log('listening to port '+ chalk.green('3008'));
});



