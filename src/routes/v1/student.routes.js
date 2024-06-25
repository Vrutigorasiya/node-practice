const express = require("express")
const { student_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-student",
    //controller
    student_controller.create_student
)

router.get(
    "/list",
    //controller
    student_controller.get_student_c
)

router.delete(
    "/delete-student",
    //controller
    student_controller.delete_student
)

//params
router.delete(
    "/delete-student/:studentid",
    //controller
    student_controller.delete_student
)

router.put(
    "/update-student/:update_id",
    //cb
    student_controller.update_student

)

module.exports = router