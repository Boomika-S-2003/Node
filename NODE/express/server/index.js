import express from "express"
import dotenv from "dotenv"
import messegeRoute from './ruotes/messegeRoute.js'
import cors from 'cors'


dotenv.config()
const app=express();

app.use(express.json());
app.use(cors());

const PORT=process.env.PORT||5000

app.use('/api/messege',messegeRoute)


// http://localhost:3000/api/messege

app.listen(PORT,()=>{
    console.log(`server sucessfully connected http://localhost:${PORT}`);
})














