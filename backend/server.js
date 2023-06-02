import  express  from "express";
import users from "./data/usersData.js";

const app=express();


app.get('/users', (req, res)=>{

    res.send(users)
})

app.get('/:id',(req,res)=>{
      const id= req.params.id
    // console.log('id is ',id)
const user=users.find(user=>{return user.id==id})
 console.log(user)
 res.send(user)
})

app.listen(5000, (req, res)=>{
    console.log(" app is running ")
})