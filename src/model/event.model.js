const mongoose = require("mongoose")

const event_schema = mongoose.Schema(
    {
        event_name:{
            type:String,
            trim:true
        },
        event_place:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const event = mongoose.model("Event",event_schema)

module.exports = event