const express = require("express")
const { music_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-music",
    //controller
    music_controller.create_music
)

router.get(
    "/list",
    //controller
    music_controller.get_music_c
)

router.delete(
    "/delete-music",
    //controller
    music_controller.delete_music
)

//params
router.delete(
    "/delete-music/:musicid",
    //controller
    music_controller.delete_music
)

router.put(
    "/update-music/:update_id",
    //cb
    music_controller.update_music

)

module.exports = router