import express from 'express'
import cors from 'cors'
import { Routes } from './controller/routes.js'
import { DatabaseCon } from './database/ReportDB.js'

const server = express()

server.use(cors("http://localhost:5173/"))
server.use(express.json())
server.use('/',Routes)
DatabaseCon()

server.listen(5000,()=>{
    console.log("server is running")
})



