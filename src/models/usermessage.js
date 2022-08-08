const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = mongoose.Schema({

    firstname:{
        type:String,
        
        minLength:3
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                document.getElementById("emailerror").innerHTML="Please enter valid Email id "          
            }
        }
    },
    mobile:{
        type:Number,
    },

    address:{
        type:String,
    },

    city:{
        type:String
    },  
    
    pincode:{
        type:Number
    },

    date:{
        type:Date,
        default:Date.now,
        
    }
})


// Collections in DB

const User = mongoose.model("User",userSchema)
module.exports = User;

