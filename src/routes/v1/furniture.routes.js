const express = require("express")
const { furniture_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-furniture",
    //controller
    furniture_controller.create_furniture
)

router.get(
    "/list",
    //controller
    furniture_controller.get_furniture_c
)

router.delete(
    "/delete-furniture",
    //controller
    furniture_controller.delete_furniture
)

//params
router.delete(
    "/delete-furniture/:furnitureid",
    //controller
    furniture_controller.delete_furniture
)

router.put(
    "/update-furniture/:update_id",
    //cb
    furniture_controller.update_furniture

)

module.exports = router