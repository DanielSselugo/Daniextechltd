//import express package/framework
const express = require('express');

//initialize app port
const PORT = process.env.PORT || 3000;

//initialise express functionalities
const app = express();

//define a route get method
app.get('/',(request,response) => {
    //set html to be displayed in the browser
    response.set('Content-Type','text/html');
    //send response
    response.status(200).send("<h1>Hello Daniex Tech</h1>");
});

//listen to app port
app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server running on PORT ${PORT}`);
    } else {
        console.log('Server failed to start with error'+'-'+error);
    }
});