const express = require("express")
const { recipe_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-recipe",
    //controller
    recipe_controller.create_recipe
)

router.get(
    "/list",
    //controller
    recipe_controller.get_recipe_c
)

router.delete(
    "/delete-recipe",
    //controller
    recipe_controller.delete_recipe
)

//params
router.delete(
    "/delete-recipe/:recipeid",
    //controller
    recipe_controller.delete_recipe
)

router.put(
    "/update-recipe/:update_id",
    //cb
    recipe_controller.update_recipe

)

module.exports = router