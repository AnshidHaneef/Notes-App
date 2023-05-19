const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        } ,
        body:{
            type:String,
            required:true
        } 
    },{
        timestamps:true
    }
)

const Notes = mongoose.model("Notes",noteSchema)
module.exports = Notes;