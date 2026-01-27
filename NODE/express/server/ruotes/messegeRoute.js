import express from "express"
import {showMessege} from '../controller/messegeController.js'

const route= express.Router()

route.post('/endMessege',showMessege)

// http//localhost:3000/api/messege/end messege

export default route;