import express from "express"
import {prismaClient} from "db/client"


const app = express()
app.use(express.json())

app.get("/users",async(req,res)=>{
    try {
        const users = await prismaClient.user.findMany()
        console.log("yaha to pahoch gya")
        res.json({
            users
        })
    } catch (error) {
        res.status(500).json({
            error
        })    
    }
})


app.post("/user",async(req,res)=>{
    const { username, password } = req.body
    // idk why this check but here we go.
    if (!username || !password) {
        res.status(400).json({
            msg:"Incomplete fields."
        })
        return
    }
    try {
       const user = await prismaClient.user.create({
        data:{
            username,
            value:password
        }
    }) 
        res.json({
            msg:"user created successfully.",
            id:user.id
        })
    } catch (error) {
        res.json({
            msg:"Error while creating user."
        })
    }
    
})
app.listen(8080, ()=>{console.log("backend server started successfully.")})