const mongoose = require("mongoose")

const student_schema = mongoose.Schema(
    {
        student_name:{
            type:String,
            trim:true
        },
        student_stream:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const student = mongoose.model("Student",student_schema)

module.exports = student