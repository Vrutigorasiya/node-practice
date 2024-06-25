const mongoose = require("mongoose")

const music_schema = mongoose.Schema(
    {
        music_instruments:{
            type:String,
            trim:true
        },
        music_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const music = mongoose.model("Music",music_schema)

module.exports = music