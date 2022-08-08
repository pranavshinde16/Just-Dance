const express = require("express")
const app = express()
const path = require("path");  
const bodyparser = require('body-parser')
const port = process.env.PORT || 5000
const hbs = require("hbs")
const User = require("./models/usermessage");
require("./db/conn");
const res = require("express/lib/response");


const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")


app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use("/jq",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/jq")))

// The __dirname in a node script returns the path of the folder where the current JavaScript file resides


app.set("view engine","hbs")
app.set("views",templatePath)
hbs.registerPartials(partialPath)


app.get("/",(req,res)=>{ 
    res.render("index.hbs")
})

app.get("/contact",(req,res)=>{ 
    res.render("contact")
})

app.get("/about",(req,res)=>{ 
    res.render("about")
})


// POST method

app.post("/contact",async(req,res)=>{
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index")
    }catch(error){
        res.status(500).send(error);
    }
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
 // npm run dev 