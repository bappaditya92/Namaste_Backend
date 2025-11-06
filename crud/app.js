import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=>{
    console.log(`Server is listenong on ${PORT}`);
    
})
