const mongoose = require("mongoose")

const blog_schema = mongoose.Schema(
    {
        blog_topic:{
            type:String,
            trim:true
        },
        blog_author:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const blog = mongoose.model("Blog",blog_schema)

module.exports = blog