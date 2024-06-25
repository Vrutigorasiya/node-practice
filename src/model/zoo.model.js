const mongoose = require("mongoose")

const zoo_schema = mongoose.Schema(
    {
        animal_name:{
            type:String,
            trim:true
        },
        animal_year:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

const zoo = mongoose.model("Zoo",zoo_schema)

module.exports = zoo