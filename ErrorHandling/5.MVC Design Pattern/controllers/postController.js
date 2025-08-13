const Post = require("../model/db");



//Show the create form
const showCreateForm=(req,res)=>{
      res.render("createPost");
}
const showPostList=
    async (req, res) => {
  const posts = await Post.find();
  res.render("list", { posts });
}

const createpostLogic= async (req, res) => {
  const { title, content, author } = req.body;
  await Post.create({
    title,
    content,
    author,
  });
  //redirect to the post list
  res.redirect("/list");}

module.exports={
    showCreateForm,
    showPostList,
    createpostLogic
}