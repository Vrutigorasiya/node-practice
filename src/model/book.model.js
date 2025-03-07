const mongoose = require("mongoose")

const book_schema = mongoose.Schema(
    {
        book_name:{
            type:String,
            trim:true
        },
        book_rating:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const book = mongoose.model("Book",book_schema)

module.exports = book