const express = require("express");
const app = express();
const { dbConnection } = require("./dbConnection");
const { Db, ObjectId } = require("mongodb");
app.use(express.json());

app.get("/student-list", async (req, res) => {
    const myDB = await dbConnection();
    const studentCollection = myDB.collection('student');
    const data = await studentCollection.find().toArray();
    let resObj = {
        status: 2,
        message: 'student list',
        data
    }
    res.send(resObj)  
});



app.post("/student-create", async (req, res) => {
  let myDB = await dbConnection();
  const studentCollection = myDB.collection("student");
  const { sName, dept, year } = req.body;
  let obj = { sName, dept, year };
  const checkname = await studentCollection.findOne({sName})
  if(checkname){
   return  res.send({
        status:0,
        message: 'sName is already present'
    })
  }
  
    const insertData = studentCollection.insertOne(obj);
  const insertObj = {
    status: 1,
    message: "Data inserted successfully",
    insertData,
  }
  res.send(insertObj);
  console.log(insertData);
  
  
});

app.delete('/student-delete/:id', async(req,res)=>{
    const {id} = req.params;
    const myDB = await dbConnection();
    const studentCollection = myDB.collection('student');
    const finalData = studentCollection.deleteOne({_id:new ObjectId(id)})
    const resObj = {
        status: 3,
        message: 'Student data deleted successfully',
        finalData
    }
    res.send(resObj);
})


app.put('/student-update/:id', async(req,res)=>{
    const {id} = req.params;
    const {sName, dept, year } = req.body;
    const obj = {}
    if(sName!=="" && sName!== null && sName!== undefined){
       obj['sName']=sName;
    }
    if(dept!=="" && dept!== null && dept!== undefined){
        obj['dept']=dept;
    }
    if(year!=="" && year!==null && year!==undefined){
        obj['year']=year;
    }
    const myDB = await dbConnection();
    const studentCollection = myDB.collection('student');
    const updateResponse = await studentCollection.updateOne({_id: new ObjectId(id)}, {$set: obj})
    const resObj = {
        stutus: 4,
        message: 'Data updated successfully',
        updateResponse
    }
    
    res.send(resObj);
})




app.listen(8000);
