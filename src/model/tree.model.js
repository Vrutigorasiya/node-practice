const mongoose = require("mongoose")

const tree_schema = mongoose.Schema(
    {
        tree_name:{
            type:String,
            trim:true
        },
        tree_type:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const tree = mongoose.model("Tree",tree_schema)

module.exports = tree