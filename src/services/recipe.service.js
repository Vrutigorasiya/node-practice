const { Recipe } = require("../model")

const create_recipe_s = (data) => {
    console.log("servicessss");
    return Recipe.create(data)
}

const get_recipe_s = () => {
    return Recipe.find()
}

const delete_recipe_s = (id) => {
    return Recipe.findByIdAndDelete(id)
}

const update_recipe_s = (id,data) => {
    return Recipe.findByIdAndUpdate(id,data)
}


module.exports = {
    create_recipe_s,
    get_recipe_s,
    delete_recipe_s,
    update_recipe_s
}