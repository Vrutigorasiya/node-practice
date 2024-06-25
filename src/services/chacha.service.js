const { Chacha } = require("../model")

const create_chacha_s = (data) => {
    console.log("servicessss");
    return Chacha.create(data)
}

const get_chacha_s = () => {
    return Chacha.find()
}

const delete_chacha_s = (id) => {
    return Chacha.findByIdAndDelete(id)
}

const update_chacha_s = (id,data) => {
    return Chacha.findByIdAndUpdate(id,data)
}


module.exports = {
    create_chacha_s,
    get_chacha_s,
    delete_chacha_s,
    update_chacha_s
}