let cron = require('node-cron')
let shell = require('shelljs')
var express = require('express')
var app = express()
cron.schedule("1,17,25,34,42,51,59 * * * *", function(){
    console.log('scheduler running...')
    if(shell.exec('node server.js').code!==0){
 console.log('Something went wrong ')
    }
})
app.get('/', function(req,res){
    res.send('Head over to https://www.youtube.com/watch?v=wYOA4waoWog to check the video')
})
app.listen(3000, () => console.log(`Server started on port 3000`));