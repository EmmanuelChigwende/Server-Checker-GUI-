import mongoose from "mongoose";

const report = mongoose.Schema({
    "Ip": {type: "String", required:true},
    "Server status": {type:"String", default:"reachable"},
    "Time taken": {type:"String", required:true},
},{timestamps:true})

const ReportStructure = new mongoose.model("ServerReports",report)

export {ReportStructure}