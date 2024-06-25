const mongoose = require("mongoose")

const furniture_schema = mongoose.Schema(
    {
        furniture_name:{
            type:String,
            trim:true
        },
        furniture_color:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const furniture = mongoose.model("Furniture",furniture_schema)

module.exports = furniture