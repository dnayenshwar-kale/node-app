const express = require("express"); 

const app = express(); 

app.get('/',(req,res) => { 

    res.end(JSON.stringify({message: 'NodeJS App Running on Amazon Elastic Beanstalk'})) 

}) 

app.listen(5000,() => { 

    console.log("server connected"); 

}); 

 