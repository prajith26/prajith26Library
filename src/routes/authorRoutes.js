const express = require("express");
const authorRouter = express.Router();

function router(nav,nav1,nav2){
    var authors = [
        {
            name:"Joseph barabar",
            Genre:"Cartoon",
            img:"barbara.jpg",
            country:"America"
        },
        {
            name:"JK Rowling",
            Genre:"Fantasy",
            img:"rowling.jpg",
            country:"Britain"
        },
        {
            name:"Harper Lee",
            Genre:"Fiction",
            img:"harper.jpg",
            country:"America"
        },
        {
            name:"F. Scott Fitzgerald",
            Genre:"Novel",
            img:"scott.jpg",
            country:"America"
        },
        {
            name:"Gabriel García Márquez",
            Genre:"Short Story",
            img:"gabriel.jpg",
            country:"Colombia"
        },
        {
            name:"J. R. R. Tolkien",
            Genre:"Fantasy",
            img:"tolkien.jpg",
            country:"South Africa"
        },
        {
            name:"E. M. Forster",
            Genre:"Fiction",
            img:"forster.jpg",
            country:"United Kingdom"
        },
        {
            name:"George R. R. Martin",
            Genre:"Fantasy",
            img:"george.jpg",
            country:"America"
        },
        {
            name:"Aldous Huxley",
            Genre:"Literature",
            img:"huxley.jpg",
            country:"United Kingdom"
        },
        {
            name:"Jasper Fforde",
            Genre:"Fantasy",
            img:"jasper.jpg",
            country:"United Kingdom"
        }
    ]
    
    authorRouter.get("/",function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors,
            nav1,
            nav2
        });
    });
    authorRouter.get("/addAuthor",function(req,res){
        res.render("addAuthor",
        {
            nav,
            title:'Library',
            authors,
            nav1,
            nav2
            //add author link create

        });
    });
    authorRouter.get("/:id",function(req,res){
        const id = req.params.id
        res.render("author",
        {
            nav,
            title:'Library',
            author: authors[id],
            nav1,
            nav2
            //add author link create

        });
    });

    

    return authorRouter;
}
module.exports = router;