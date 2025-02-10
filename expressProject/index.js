const express = require("express");
require("dotenv").config();
const {isValidToken} = require("./checkTokenMiddleware")
const app = express();

console.log(process.env.MyToken);

app.use(express.json()); //if form data comming json data


app.get("/", (req, res) => {
  res.send({
    status: 1,
    message: "i am in get method",
  });
});

app.get("/news", isValidToken, (req, res) => {
  res.send({
    name: "todays news",
    message: "not any news",
  });
});

app.get("/keyMessage",isValidToken, (req, res) => {
  res.send({
    categories: "Sports",
    player: "Virat Kohli",
    message: "India won",
  });
});

app.post("/login", isValidToken,(req, res) => {
  //console.log(req.body); //object

  // res.send({

  //     bodyData:req.body,
  //     queryData:req.query

  // })
  res.status(200).json({
    bodyData: req.body,
    querydata: req.query,
  });
});

app.get("/news/:id", (req, res) => {
   
    
  const currentId = req.params.id;
  res.send("new updated news" + currentId);
});
app.listen(process.env.PORT||8080)

