const fs = require("node:fs")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require('cors')

const userData = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    }    
})

const User = mongoose.model("User", userData)



mongoose.connect("mongodb://127.0.0.1:27017/user").then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database Can't Be Connected")
})

app.use(cors({origin:["*"]}))

app.get("/",(req,res)=>{

        User.find().then(function(user){
            res.send(user)
        })
})


app.listen(8080, ()=>{
    console.log("Server started at port")
})
