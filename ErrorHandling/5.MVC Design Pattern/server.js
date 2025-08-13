const express = require("express");
const postRouter = require("./router/postRouter");
const app = express();
//-----Connect DB------
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://mt834111:Mukul69@cluster0.s5qekt9.mongodb.net/")
  .then(() => {
    console.log("DB has been connected");
  })
  .catch((e) => {
    console.log(e);
  });
const PORT = 3000;
//!Configure ejs
app.set("view engine", "ejs");
//!Middlewares
app.use(express.urlencoded({ extended: true }));


//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});
//!Router for posts
app.use('/',postRouter);


//Start the server
app.listen(PORT, console.log(`The server is running on http://localhost:${PORT}`));