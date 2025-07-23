import mongoose from 'mongoose'

async function DatabaseCon() {   
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Reports")
        console.log("database connected successfully")
    }
    catch(error){
        console.log("database connection failed",error)
    }
}

export {DatabaseCon}