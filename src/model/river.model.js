const mongoose = require("mongoose")

const river_schema = mongoose.Schema(
    {
        river_name:{
            type:String,
            trim:true
        },
        river_state:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const river = mongoose.model("River",river_schema)

module.exports = river