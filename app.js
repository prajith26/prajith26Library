const express = require("express");
const port = process.env.PORT || 5000;

const app = express();
const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    },
    {
        link:"/Login",name:"Login"
    }
];
const nav1 = [
    {
        link:"/books/addBook",name:"Add New Book"
    },
    {
        link:"/authors/addAuthor",name:"Add New Author"
    }      
];
const nav2 = [
    {
        link:"/",name:"Log out"
    }  
];
const booksRouter = require("./src/routes/bookRoutes")(nav,nav1,nav2)
const authorRouter = require("./src/routes/authorRoutes")(nav,nav1,nav2)
const LoginRouter = require("./src/routes/LoginRoutes")(nav)
const SignupRouter = require("./src/routes/SignupRoutes")(nav)
// const LogoutRouter = require("./src/routes/LogoutRoutes")(nav) 



app.use(express.static("./public"))
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authorRouter);
app.use("/Login",LoginRouter);
app.use("/Signup",SignupRouter);



app.get("/",function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.get("/home",function(req,res){
    res.render("home",
    {
        nav,
        title:'Library',
        nav2
    });
})


app.listen(port,()=>{console.log("Server Ready at"+port)});