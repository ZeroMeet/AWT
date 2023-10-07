const express=require('express');
const helmet=require('helmet')
const https=require('https')
const path =require('path')
const fs=require('fs');
const app=express();
app.use(helmet());
app.use(express.urlencoded({
    extended:true
}));


app.get('/',(req,res)=>{
    res.send("New ssl Server")
})

const sslServer=https.createServer({
    key:fs.readFileSync(path.join(__dirname,'key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'cert.pem'))
},app)
sslServer.listen(8080,()=>{
    console.log("Server start")
})

