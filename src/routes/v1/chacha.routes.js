const express = require("express")
const { chacha_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-chacha",
    //controller
    chacha_controller.create_chacha
)

router.get(
    "/list",
    //controller
    chacha_controller.get_chacha_c
)

router.delete(
    "/delete-chacha",
    //controller
    chacha_controller.delete_chacha
)

//params
router.delete(
    "/delete-chacha/:chachaid",
    //controller
    chacha_controller.delete_chacha
)

router.put(
    "/update-chacha/:update_id",
    //cb
    chacha_controller.update_chacha

)

module.exports = router