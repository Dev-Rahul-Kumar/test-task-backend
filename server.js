console.log("This is a Backend Server");
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const app=express();

//structure and route import
const route = require('./regroute/regRoute')


app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());


// mongoose Connection

const url='mongodb+srv://rahul-user:Rahul1994@nodetutes.6tllifg.mongodb.net/registrationData?retryWrites=true&w=majority';

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true })
.then((result)=>{
    console.log('connection to database sucessful');
    console.log(result);
})
.catch((err)=>console.log(err))

app.use('/',route)




app.listen(5000,()=>{
    console.log('Server is running in port 5000');
})