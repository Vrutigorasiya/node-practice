const express = require("express")
const { event_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-event",
    //controller
    event_controller.create_event
)

router.get(
    "/list",
    //controller
    event_controller.get_event_c
)

router.delete(
    "/delete-event",
    //controller
    event_controller.delete_event
)

//params
router.delete(
    "/delete-event/:eventid",
    //controller
    event_controller.delete_event
)

router.put(
    "/update-event/:update_id",
    //cb
    event_controller.update_event

)

module.exports = router