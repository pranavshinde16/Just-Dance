const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Project-3",{    
}).then(()=>{
    console.log("Database created")
}).catch((error)=>{
    console.log("MongoDB connection failed:", error.message)
})