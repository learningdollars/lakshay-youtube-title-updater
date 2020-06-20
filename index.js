let cron = require('node-cron')
let shell = require('shelljs')
var express = require('express')
var app = express()

app.get('/', function(req,res){
    res.redirect("https://www.youtube.com/watch?v=wYOA4waoWog")
}) 

cron.schedule("* * * * * *", function(){
    console.log('scheduler running...')
    if(shell.exec('node server.js').code!==0){
 console.log('Something went wrong ')
    }
})

app.listen(process.env.PORT || 3000, () => console.log(`Server started on port 3000`));