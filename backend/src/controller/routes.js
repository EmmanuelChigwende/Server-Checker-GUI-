import express from "express"
import { GetServerReports,AddNewServerReport,DeleteServerReports } from "../Logic/Logic.js"

const Routes = express.Router()

Routes.get('/',GetServerReports)
Routes.post('/new',AddNewServerReport)
Routes.delete('/delete/:id',DeleteServerReports)


export{Routes}