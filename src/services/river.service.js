const { River } = require("../model")

const create_river_s = (data) => {
    console.log("servicessss");
    return River.create(data)
}

const get_river_s = () => {
    return River.find()
}

const delete_river_s = (id) => {
    return River.findByIdAndDelete(id)
}

const update_river_s = (id,data) => {
    return River.findByIdAndUpdate(id,data)
}


module.exports = {
    create_river_s,
    get_river_s,
    delete_river_s,
    update_river_s
}