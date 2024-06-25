const mongoose = require("mongoose")

const product_schema = mongoose.Schema(
    {
        product_name:{
            type:String,
            trim:true
        },
        product_info:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const product = mongoose.model("Product",product_schema)

module.exports = product