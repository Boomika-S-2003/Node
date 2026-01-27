import express from "express"
import dotenv from "dotenv"
import dataRoute from "./routs/dataRoute.js"
import cors from 'cors'

dotenv.config()
const app=express()

app.use(express.json())
app.use(cors())

const PORT=process.env.PORT||3000

app.use("/api/data",dataRoute)

// http://localhost:5000/api/data

app.listen(PORT,()=>{
    console.log(`practice  server connected successfully http://localhost:${PORT}`);
})