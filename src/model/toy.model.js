const mongoose = require("mongoose")

const toy_schema = mongoose.Schema(
    {
        toy_name:{
            type:String,
            trim:true
        },
        toy_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const toy = mongoose.model("Toy",toy_schema)

module.exports = toy