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

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
    })
    .catch(error => {
        console.error('Error connecting to PostgreSQL:', error);
    });
// async function connectAndQuery() {
//     try {
//         await client.connect();
//         console.log('Connected to PostgreSQL');
       
//         const result = await client.query('SELECT username FROM users where userid=1 ');
//         console.log('Result:', result.rows[0].username);
//     } catch (error) {
//         console.error('Error connecting to PostgreSQL:', error);
//     } finally {
//         await client.end();
//         console.log('Disconnected from PostgreSQL');
//     }
// }

// connectAndQuery();

app.use(cors());

const PORT = process.env.PORT || 3000 ;

app.get('/',(req,res,next)  =>{
    res.send("<h1>This is the server</h1>")
})

async function loginCheck(inputuser) {
    try {
         
        const result = await client.query(`Select password,username from login_info where username='${inputuser}'`);
        return({'username':result.rows[0].username,'password':result.rows[0].password})
        //console.log('Result:', result.rows[0].username);
        //console.log('Result:',result.rows[0].password);
    } catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
    } finally {
        console.log('Query successful');
    }
}

app.get('/login/:username/:password',async(req,res,next)=>{
    const username = req.params.username;
    const password = req.params.password;
    const credentials = await loginCheck(username);
    if(credentials.username == username && credentials.password == password){
        res.send(true);
    }else{
        res.send(false)
    }
    
});

async function patientidCheck(inputuser) {
    try {
         
        const result = await client.query(`Select count(*) from patient_data where biometric='${inputuser}'`);
        return(result.rows[0].count);
        //return({'biometric':result.rows[0].biometric})
        //console.log('Result:', result.rows[0].username);
        //console.log('Result:',result.rows[0].password);
    } catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
    } finally {
        console.log('Query successful');
    }
}

app.get('/patientid/:id', async(req,res,next)=>{
    const biometric = req.params.id;
    const count = await patientidCheck(biometric);
    if(count == 1){
        res.send(true)
    }else{
        res.send(false)
    }
   
})

async function fetchPatientName(id) {
    try{
        const result = await client.query(`select name from patient_data where biometric='${id}' `);
        return(result.rows[0].name)

    } catch(err){
        console.error('The error is: ',err)
    } finally{
        console.log('Query Successful')
    }
}

async function fetchPatientReports(patientName){
    try{
        const result = await client.query(`select * from ${patientName} `);
        return(result.rows);
    }catch(err){
        console.error('The error is: ',err);
    }finally{
        console.log("Query successful");
    }
}

app.get('/medhist/:id', async(req, res, next)=>{
    const biometricId = req.params.id;
    const patientName = await fetchPatientName(biometricId);
    const patientReport = await fetchPatientReports(patientName);
    res.json({patientReport});
})

async function fetchPersonalInfo(id){
    try{
        const result = await client.query(`select * from patient_data where biometric='${id}' `);
        return(result.rows[0])

    } catch(err){
        console.error('The error is: ',err)
    } finally{
        console.log('Query Successful')
    }
}

app.get('/personal/:id',async(req, res, next) => {
    const biometricId = req.params.id;
    const patientinfo = await fetchPersonalInfo(biometricId)
    res.json(patientinfo);
})

app.listen(PORT, ()=>{
    console.log(`The server is listening to port ${PORT}`)
})
