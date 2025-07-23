import { ReportStructure } from "../model/ReportShema.js"


async function GetServerReports(req,res) {
    try{
        const Reports = await ReportStructure.find()

        if(!Reports){
            console.log("no Reports in the database")
            return  res.status(404).json({
                message:"no Reports in the database"
            })
        }

        return res.status(200).json({
            message:"Reports fetched.....",
            data: Reports
        })
    }
    catch(error){
        console.log("failed to fetch Reports")
        return res.status(500).json({
            message:"failed to fetch Reports"
        })
    }
}

async function  AddNewServerReport(req,res) {
    try{
        const Report = new ReportStructure(req.body)

        if(!Report){
            console.log("Report must contain information (not allowed to submit a blank report)")
            return res.status(401).json({
                message:"Report must contain information (not allowed to submit a blank report)"
            })
        }
        else{
            await Report.save()
            return res.status(201).json({
                message:"Report created successfully"
            })
        }
    }
    catch(error){
        console.log("failed to fetch Reports")
        return res.status(500).json({
            message:"failed to fetch Reports"
        })
    }
}

async function DeleteServerReports(req,res) {
    try{
        const id = req.params.id
        await ReportStructure.findByIdAndDelete({id:id})
        if(!id){
            console.log("Report does not exist")
            return res.status(401).json({
                message:"Report does not exist"
            })
        }
        else{
            return res.status(200).json({
                message:"Report has been deleted"
            })
        }
    }
    catch(error){
        console.log("failed to Delete Reports")
        return res.status(500).json({
            message:"failed to Delete Reports",
            error:error
        })
    }
}


export {GetServerReports,AddNewServerReport,DeleteServerReports}