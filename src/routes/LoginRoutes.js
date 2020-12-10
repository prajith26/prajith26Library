const express = require("express");
const LoginRouter = express.Router();

// const bodyParser = require("body-parser");
// const { check, validationResult } = require("express-validator");

// const urlencodedParser = bodyParser.urlencoded({extended:false});

const signup=[
    {
        link:"/Signup",name:"Signup"
    }
];

function router(nav){
   
    LoginRouter.get("/",function(req,res){
        res.render("Login",{
            nav,
            title:'Library',
            signup
        });
    });
    

    return LoginRouter;
}

module.exports = router;