const express = require("express")
const router = express.Router();
//localhsot:8080/users/demo

router.get("/",(req,res)=>
{
    res.send(" this is get / of user ")
})
router.post("/",(req,res)=>
{
    res.send(" this is post / of user")
})
router.get("/demo",(req,res)=>
{
     res.send(" this is demo of users ")
})
module.exports = router;