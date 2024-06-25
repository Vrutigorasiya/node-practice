const { Product } = require("../model")

const create_product_s = (data) => {
    console.log("servicessss");
    return Product.create(data)
}

const get_product_s = () => {
    return Product.find()
}

const delete_product_s = (id) => {
    return Product.findByIdAndDelete(id)
}

const update_product_s = (id,data) => {
    return Product.findByIdAndUpdate(id,data)
}


module.exports = {
    create_product_s,
    get_product_s,
    delete_product_s,
    update_product_s
}