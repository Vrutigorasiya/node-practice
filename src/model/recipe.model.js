const mongoose = require("mongoose")

const recipe_schema = mongoose.Schema(
    {
        recipe_cook:{
            type:String,
            trim:true
        },
        recipe_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const recipe = mongoose.model("Recipe",recipe_schema)

module.exports = recipe