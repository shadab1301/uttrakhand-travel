const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan =  require("morgan");
const mongoose = require("./Connection/db");
const Route = require("./Api/admin/Routes/routes");
const app=express()
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*" );
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("*",cors());
app.use(morgan("dev"));
app.use("/public", express.static("public"));

// api's
app.use('/api/v1',Route);

// if url not match for api 
app.use((req,res,next)=>{
    const error = new Error('URL Not Valid.');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
          error: {
                message: error.message
          }
    });
  }); 

const port = process.env.PORT;
app.listen(port,()=>{ console.log(`Server is running on: ${port}`);});