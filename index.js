const http= require('http');
const express=require('express')
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.get('/*',(req,res,next)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

const server=http.createServer(app);
server.listen(3000);