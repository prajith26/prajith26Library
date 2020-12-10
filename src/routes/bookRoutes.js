const express = require("express");

const booksRouter = express.Router();

function router(nav,nav1,nav2){
    var books = [
        {
            title:"Tom n Jerry",
            author:"Joseph barabar",
            Genre:"Cartoon",
            img:"tom.jpg"
        },
        {
            title:"Harry Potter",
            author:"JK Rowling",
            Genre:"Fantasy",
            img:"harry.jpg"
        },
        {
            title:"To Kill a Mockingbird",
            author:"Harper Lee",
            Genre:"Thriller",
            img:"Mockingbird.jpg"
        },
        {
            title:"The Great Gatsby",
            author:"F. Scott Fitzgerald",
            Genre:"Literary fiction",
            img:"Gatsby.jpg"
        },
        {
            title:"One Hundred Years of Solitude",
            author:"Gabriel García Márquez",
            Genre:"Novel",
            img:"solitude.jpg"
        },
        {
            title:"The Lord Of The Rings",
            author:"J. R. R. Tolkien",
            Genre:"Fantasy",
            img:"rings.jpg"
        },
        {
            title:"A Passage to India",
            author:"E. M. Forster",
            Genre:"Political Fiction",
            img:"passage.jpg"
        },
        {
            title:"A Song Of Ice And Fire Series",
            author:"George R. R. Martin",
            Genre:"Fantasy",
            img:"got.jpg"
        },
        {
            title:"Brave New World",
            author:"Aldous Huxley",
            Genre:"Science Fiction",
            img:"BraveNewWorld.jpg"
        },
        {
            title:"The Eyre Affair",
            author:"Jasper Fforde",
            Genre:"Fantasy Fiction",
            img:"affair.jpg"
        }
    ]
    
    booksRouter.get("/",function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books,
            nav1,
            nav2
            //add book link create
        });
    });
    
    
    

    booksRouter.get("/addBook",function(req,res){
        res.render("addBook",
        {
            nav,
            title:'Library',
            nav1,
            nav2
        });
    });

    booksRouter.get("/:id",function(req,res){
        const id = req.params.id
        res.render("book",
        {
            nav,
            title:'Library',
            book: books[id],
            nav1,
            nav2
            //add book link create
        });
    });

    return booksRouter;
}


module.exports = router;