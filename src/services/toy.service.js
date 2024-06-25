const { Toy } = require("../model")

const create_toy_s = (data) => {
    console.log("servicessss");
    return Toy.create(data)
}

const get_toy_s = () => {
    return Toy.find()
}

const delete_toy_s = (id) => {
    return Toy.findByIdAndDelete(id)
}

const update_toy_s = (id,data) => {
    return Toy.findByIdAndUpdate(id,data)
}


module.exports = {
    create_toy_s,
    get_toy_s,
    delete_toy_s,
    update_toy_s
}