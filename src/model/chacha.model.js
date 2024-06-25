const mongoose = require("mongoose")

const chacha_schema = mongoose.Schema(
    {
        chacha_name:{
            type:String,
            trim:true
        },
        chacha_age:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const chacha = mongoose.model("Chacha",chacha_schema)

module.exports = chacha