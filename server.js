const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ =require("lodash");
const COMMON_CONSTS = require(__dirname + "/commonConst.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +"/public"));

// Set the correct MIME type for CSS files
// app.get('/admin/css/bootstrap.css', (req, res) => {
//   res.setHeader('Content-Type', 'text/css');
//   res.sendFile(__dirname+'/public/css/bootstrap.css');
// });

app.set("view engine", "ejs");

const PORT = COMMON_CONSTS.PORT;

const data =[];
app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/about", function (req, res) {
  res.render("about.ejs");
});

app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});

app.get("/blog", function (req, res) {
  console.log(data);
  res.render("blog.ejs",{data:data});
});

app.get("/admin", function (req, res) {
  res.render("admin.ejs");
});

app.get("/new-blog", function (req, res) {
  res.render("newBlog.ejs");
});

app.get("/blog/:urlName",function(req,res){
  const requestedUrl = _.lowerCase(req.params.urlName);
  data.forEach(element => {
    if(requestedUrl === element.title.toLowerCase()){
      res.render("blogPageFormat.ejs",{element:element});
    }
 });
});

app.post("/new-blog",function(req,res){
  console.log(90);
  const postBody={
    title : req.body.blogTittle,
    content : req.body.blogContent,
    description : req.body.blogDescriptions
  }
  data.push(postBody);
  res.redirect("/new-blog");
});


app.listen(PORT, function () {
  console.log("Server started on port number 3000");
});
