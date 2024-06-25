const express = require("express")
const { contact_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-contact",
    //controller
    contact_controller.create_contact
)

router.get(
    "/list",
    //controller
    contact_controller.get_contact_c
)

router.delete(
    "/delete-contact",
    //controller
    contact_controller.delete_contact
)

//params
router.delete(
    "/delete-contact/:contactid",
    //controller
    contact_controller.delete_contact
)

router.put(
    "/update-contact/:update_id",
    //cb
    contact_controller.update_contact

)

module.exports = router