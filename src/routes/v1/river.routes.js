const express = require("express")
const { river_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-river",
    //controller
    river_controller.create_river
)

router.get(
    "/list",
    //controller
    river_controller.get_river_c
)

router.delete(
    "/delete-river",
    //controller
    river_controller.delete_river
)

//params
router.delete(
    "/delete-river/:riverid",
    //controller
    river_controller.delete_river
)

router.put(
    "/update-river/:update_id",
    //cb
    river_controller.update_river

)

module.exports = router