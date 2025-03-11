const express = require('express');
const mongoose = require('mongoose');
const enquiryModel = require('./models/enquiryModel')
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

app.post('/api/enquiry-insert',(req,res)=>{
    const {name,id,contactNo,email,query} = req.body;
    const obj = {name,id,contactNo,email,query}

    const insertData = enquiryModel.enquiry

    res.send('post api is running...')
})


mongoose.connect(process.env.DBURL).then(()=>{
    
    console.log("database is connected");
    app.listen(8080,()=>{
        console.log("server is running on: " + process.env.PORT)
        
    })
    
})