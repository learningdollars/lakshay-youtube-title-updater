let cron = require('node-cron')
let shell = require('shelljs')

cron.schedule("8,17,25,34,42,51,59 * * * *", function(){
    console.log('scheduler running...')
    if(shell.exec('node server.js').code!==0){
 console.log('Something went wrong ')
    }
})