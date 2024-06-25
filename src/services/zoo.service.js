const { Zoo } = require("../model")

const create_zoo_s = (data) => {
    console.log("servicessss");
    return Zoo.create(data)
}

const get_zoo_s = () => {
    return Zoo.find()
}

const delete_zoo_s = (id) => {
    return Zoo.findByIdAndDelete(id)
}

const update_zoo_s = (id,data) => {
    return Zoo.findByIdAndUpdate(id,data)
}


module.exports = {
    create_zoo_s,
    get_zoo_s,
    delete_zoo_s,
    update_zoo_s
}