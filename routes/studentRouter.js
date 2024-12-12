const express = require("express")
const router = express.Router();
const studentController = require("../controller/studentController")

router.get("/",(req,res)=>
{
    let data = studentController.getall();
    res.send(data)
})
router.post("/",(req,res)=>
{
    let s = {name:req.body.name,age:req.body.age}
    studentController.insertStudent(s)
    res.send("student added succesfully ")
})
router.put("/",(req,res)=>
{
    let s = {name:req.body.name,age:req.body.age}
    studentController.updateStudent(s);
    res.send("student updated ")
    // res.send("we will update student here");
})
router.delete("/",(req,res)=>
{
    let s = {name:req.body.name}
    studentController.deleteStudent(s)
    res.send("student deleted successfully ")
})
module.exports = router
