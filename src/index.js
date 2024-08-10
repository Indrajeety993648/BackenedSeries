import mongoose from "mongoose"
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// require('dotenv').config()

import dotenv from "dotenv"
dotenv.config({
  path:'./env'
})


connectDB()












// Our first Approach ...

/*
import express from "express"
// database  se jab bhi baat karenge  to problem aa sakti hai to hamesha user try  catch mei wrap karo ...
// ya promises le sakte ho  , database is always in another contintent (async await  lagana hi padega)

// function connectDB(){

// }
// connectDB()

// iIFEE 
// jab hm IIFEES likhte hai to  hamesha  ek semicolon uske pahle  laga dete hai  ye sirf cleaning purpose ke liye jota hai  ...  ye bhi karta hai ki kabhi kabhi  programmer semicolon aage ke code mei lagana bhul jata hai to ye use handle kar leta hai ...

const app  = express()
;(async() => {
  try{
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

     // this is an good approach .. ki app ko yahi  par bula iya ki data base apne app se baat kar paa raha hai ya nhi agar nhi kar  paa raha hai to  error throw kar do ya koi message print kara do ki bhaiya abhi hmara database app se baat nhi kar paa raha hai ...



    //  app.on("error",(error) =>{
    //   console.log("Error :" , error);
    //   throw error
    //  })

    //  app.listen(process.env.PORT,()=>{
    //   console.loog(`App is Listening  on port ${process.env.PORT}`)
    //  })
  }
  catch(error){
    console.log("Error : " , error)
    throw err
  }
})()
*/