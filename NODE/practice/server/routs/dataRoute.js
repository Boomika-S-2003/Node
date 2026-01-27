import express from "express"
import { showData } from "../controllers/dataController.js"

const router=express.Router()

router.post("/endData",showData)
// http://localhost:5000/api/data/endData

export default router