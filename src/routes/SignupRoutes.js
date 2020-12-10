const express = require("express");
const SignupRouter = express.Router();

function router(nav){
    
    SignupRouter.get("/",function(req,res){
        res.render("Signup",{
            nav,
            title:'Library',
        });
    });
    return SignupRouter;
}

module.exports = router;