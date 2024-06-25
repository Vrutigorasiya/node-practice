const { Furniture } = require("../model")

const create_furniture_s = (data) => {
    console.log("servicessss");
    return Furniture.create(data)
}

const get_furniture_s = () => {
    return Furniture.find()
}

const delete_furniture_s = (id) => {
    return Furniture.findByIdAndDelete(id)
}

const update_furniture_s = (id,data) => {
    return Furniture.findByIdAndUpdate(id,data)
}


module.exports = {
    create_furniture_s,
    get_furniture_s,
    delete_furniture_s,
    update_furniture_s
}