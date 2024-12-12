const express = require("express")
const app = express()
const userRouter = require("./routes/userRouter")
const studentRouter = require("./routes/studentRouter")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users",userRouter)
app.use("/student",studentRouter)



app.get("/",(req,res)=>
{res.send("use /users for user \n <br> \student for student" )})
app.post("/forposthandle",(req,res)=>
{
    console.log(req.body)
    console.log(req.file)
    res.send("hjelsjdfl ")
})
app.listen(8080,()=>console.log("server running "))