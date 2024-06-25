const express = require("express")
const { product_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-product",
    //controller
    product_controller.create_product
)

router.get(
    "/list",
    //controller
    product_controller.get_product_c
)

router.delete(
    "/delete-product",
    //controller
    product_controller.delete_product
)

//params
router.delete(
    "/delete-product/:productid",
    //controller
    product_controller.delete_product
)

router.put(
    "/update-product/:update_id",
    //cb
    product_controller.update_product

)

module.exports = router