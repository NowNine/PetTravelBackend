const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/pettravel").then(()=>{
    console.log ("DATABASE CONNECT")
})