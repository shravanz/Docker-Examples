const express = require('express');

const PORT = process.env.PORT || 5500;

const app = express();

app.get('/',(req,res)=>{
    return res.send("Welcome to Node-Express Js with Docker containers");
})

app.listen(PORT,()=>console.log(`Listening on Port ${PORT}`)); 