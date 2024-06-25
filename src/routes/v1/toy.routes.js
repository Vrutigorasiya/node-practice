const express = require("express")
const { toy_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-toy",
    //controller
    toy_controller.create_toy
)

router.get(
    "/list",
    //controller
    toy_controller.get_toy_c
)

router.delete(
    "/delete-toy",
    //controller
    toy_controller.delete_toy
)

//params
router.delete(
    "/delete-toy/:toyid",
    //controller
    toy_controller.delete_toy
)

router.put(
    "/update-toy/:update_id",
    //cb
    toy_controller.update_toy

)

module.exports = router