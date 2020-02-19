
const express = require('express');
var booksRouter=express.Router();//for use books




function router(nav){
    var books=[
        {
            title:"The war and peace",
            genere:"Histotical fiction",
            author:"Lev nicolayevich",
            image:"/images/book.jpg"
        },
        {
            title:"wings of fire",
            genere:"autobiography",
            author:"abdul kalam",
            image:"/images/a.jpeg"
        },
       
        {
            title:"The war and peace",
            genere:"Histotical fiction",
            author:"Lev nicolayevich",
            image:"/images/aa.jpg"
        },
        {
            title:"The war and peace",
        
            genere:"Histotical fiction",
        
            author:"Lev nicolayevich",
            image:"/images/hh.jpg"
        }
        
    ];

    booksRouter.route('/')
    .get((req,res)=>{
        res.render(
            'books.ejs',{
                nav:[
                    {link:'/books',title:'Books'},
                    {link:'/authors',title:'Authors'}
                ],
                title:"Books",
                books

            }
        );
    });

    booksRouter.route('/:id')  //here id is request parameter, used to store the id of book
    .get((req,res)=>{
        const id = req.params.id;
        res.render(
            'book.ejs',{
                nav,
                title:"Books",
                book: books[id]

            }
        );
    });
return booksRouter;
}
// module.exports=booksRouter;
module.exports=router;