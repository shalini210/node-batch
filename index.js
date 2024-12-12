const express = require("express")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>
{
    res.sendFile(__dirname +"/demo.html")
})
app.get("/forpost",(req,res)=>
{
    res.sendFile(__dirname+"/postdemo.html")
})
app.post("/forposthandle",(req,res)=>
{
    console.log(req.body)
    res.send(`welcome ${req.body.username}`)
})
app.get("/check",(req,res)=>
{
    let op = req.query.btnname;
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    switch(op)
    {
        case '+':
            res.send(`sum is ${a+b}`)
            break;
        case '-':
                res.send(`sum is ${a-b}`)
                break;
        case '*':
            res.send(`sum is ${a*b}`)
             break;
        case '/':
            res.send(`sum is ${a/b}`)
            break;
    }
    
})


app.listen(8080,()=>console.log("server running on port 8080"))
