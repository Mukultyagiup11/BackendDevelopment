const express=require('express');

//!intialize express
const app=express();

//Routes for books
//!Get all books:-
// app.get('/books',(req,res)=>{
//    res.send('Get all books!');
// })
// //!Post new book:-
// app.post('/books',(req,res)=>{
//    res.send('Post a new book!');
// })

// //!delete all books:-
// app.delete('/books',(req,res)=>{
//    res.send('delete all books')
// })


//route chaining for path "/books":-
app.route('/books').get((req,res)=>{
    res.send('Get all books!')
}).post((req,res)=>{
     res.send('Post a new book!');
}).delete((req,res)=>{
     res.send('delete all books')
})


// //!Get a single book:-
// app.get('/books/:id',(req,res)=>{
//      res.send("Get a single books!");
// })
// //!Update a boook:-
// app.patch('/books/:id',(req,res)=>{
//     res.send('updating a book!');
// })
// //!delete a book
// app.delete('/books/:id',(req,res)=>{
//     res.send('deleting a book!');
// })

//route chaining for path "/books/:id":-
app.route('/books/:id').get((req,res)=>{
    res.send(`Get a single book of id:${req.params.id}`);
}).delete((req,res)=>{
     res.send('deleting a book!');
}).patch((req,res)=>{
     res.send('updating a book!');
})


//!server listen
const PORT=6768;
app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`);
})
