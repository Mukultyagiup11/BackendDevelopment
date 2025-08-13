const express=require('express');
const mongoose = require("mongoose");
const { showCreateForm, showPostList, createpostLogic } = require('../controllers/postController');
//Router for posts
const postRouter=express.Router();



//! Show the create form
postRouter.get("/create",showCreateForm);
//! To get all posts
postRouter.get("/list",showPostList);
//! Create the post (The main logic)
postRouter.post("/create",createpostLogic);

module.exports=postRouter;