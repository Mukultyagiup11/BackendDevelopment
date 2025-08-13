const express=require('express');
const mongoose=require('mongoose');

const app=express();
const URL=''

const connectDB=async ()=>{
    try {
        await mongoose.connect(URL);
        console.log('MongoDB Connected Succcessfully.....!');
    } catch (error) {
        console.log(error);
    }
}
connectDB();
//!One to Many Association
//?commentSchema
const commentSchema=new mongoose.Schema({
    text:String
})
const Comment=mongoose.model('Comment',commentSchema);
//?BlogPost
const blogSchema=new mongoose.Schema({
    title:String,
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
})

const Blog=mongoose.model('Blog',blogSchema);
//?create blog
Blog.create({
    title:"Awesome Blog"
}).then((data)=>{
   console.log(data);
}).catch((err)=>{
    console.log(err);
})

//?Create Comment
const createComment=async ()=>{
    try {
         //?1.find the post you want to comment
         const blog=await Blog.findById('6891ed8974c43b6a2798dfc7')
         console.log(blog);
         //?2.Create The Comment
         const comment=await Comment.create({text:"Awesome Blog...."})
         console.log(comment)
         //?3.Push The Comment into the post
           blog.comments.push(comment._id);
         //?4.resave the post
         await blog.save()
      
    } catch (error) {
        console.log(error)
    }
}
createComment();


const PORT =5000||process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Listen at http://localhost:${PORT}`);
})