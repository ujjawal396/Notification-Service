const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();

env.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(process.env.PORT, async()=>{
    console.log(`server started running at : ${process.env.PORT}`);

    try{

        await mongoose.connect(process.env.DB_URL,{
        dbName: DB_NAME,   // 🔑 dynamic DB name
        family: 4,        // Windows DNS fix
        tls: true,

        serverSelectionTimeoutMS: 5000
        
      });
        console.log("mongoDb connected");

    }catch(err){
        console.error("mongoDb failed:", err.message);


    }
})