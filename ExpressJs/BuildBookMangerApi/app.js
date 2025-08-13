const express=require('express');
const app=express();
//midelware to pass json
app.use(express.json());
//simulated book data[static book for now]
let books=[
    {id:1,title:"Nodejs MasterClass",author:"Smith"},
    {id:2,title:"Mastering Mern Stack",author:"Emmanuel"}
]
//!get all books:-
app.get('/books',(req,res)=>{
    res.json(books);
})

//!add new book:-
app.post('/books',(req,res)=>{
    const newBook=req.body;
    newBook.id=books.length+1;
    //push the new book by array method:-
    books.push(newBook);

    res.json({message:"New book is added!",newbook:newBook,
        allBooks:books
    });
})

//!Get by id:-
app.get('/books/:id',(req,res)=>{
   const bookId=Number(req.params.id);//convert string to nnumber:-
   const bookFound=books.find((book)=>{
       return book.id===bookId;
   })
   if(!bookFound){
    res.json({message:"Book not found"})
   }
   res.json(bookFound);
})

//!delete a book by id:-
app.delete('/books/:id',(req,res)=>{
    const bookId=Number(req.params.id);
    books=books.filter((book)=>{
      return book.id!==bookId;
    })
    
   res.json({message:"Books is updated!",
      books
   })
})

//!Update a book by its id:-
app.put('/books/:id',(req,res)=>{
    const bookId=Number(req.params.id);
    const index=books.findIndex((book)=>{
        return book.id===bookId
    })
    if(!index){
        res.json({message:"Book Not found"});
    }
    const updatedBook={...books[index],...req.body};
    books[index]=updatedBook;
    res.json({message:"Your Book Is Updated",
        data:updatedBook
    })
})
const PORT=3056;
app.listen(PORT,()=>{
    console.log(`Server Listen At http://localhost:${PORT}`);
})