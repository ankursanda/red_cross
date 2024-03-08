const express = require('express');
const cors = require('cors');
const {Client} = require('pg');

const app = express()

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'redcross',
    password: 'postgres', 
    port: 5432, 
});

async function connectAndQuery() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
       
        const result = await client.query('SELECT username FROM users where userid=1 ');
        console.log('Result:', result.rows[0].username);
    } catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
    } finally {
        await client.end();
        console.log('Disconnected from PostgreSQL');
    }
}

connectAndQuery();

app.use(cors());

const PORT = process.env.PORT || 3000 ;

app.get('/',(req,res,next)  =>{
    res.send("<h1>This is the server</h1>")
})

app.get('/login',(req,res,next)=>{
    res.send(true);
});

app.get('/patientid/:id',(req,res,next)=>{
    if(req.params.id === 'abc'){
        res.send(true)
    }else{
        res.send(false)
    }
   
})

app.get('/patientinfo/:id',(req,res,next)=>{
    if(req.query.id === 'abc'){
        res.json()
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is listening to port ${PORT}`)
})
