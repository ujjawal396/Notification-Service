const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const app = express();
const sendMail = require('./services/email.service');
const TicketRoutes=require('./routes/ticket.routes');



env.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
TicketRoutes(app);
app.listen(process.env.PORT, async()=>{
    
    console.log(`server started running at : ${process.env.PORT}`);
   // sendMail(process.env.EMAIL, process.env.EMAIL_PASS);

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