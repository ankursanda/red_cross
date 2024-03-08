const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000 ;

app.get('/',(req,res,next)  =>{
    res.send("<h1>This is the server</h1>")
})

app.listen(PORT, ()=>{
    console.log(`The server is listening to port ${PORT}`)
})
