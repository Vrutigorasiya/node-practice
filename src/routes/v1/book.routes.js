const express = require("express")
const { book_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-book",
    //controller
    book_controller.create_book
)

router.get(
    "/list",
    //controller
    book_controller.get_book_c
)

router.delete(
    "/delete-book",
    //controller
    book_controller.delete_book
)

//params
router.delete(
    "/delete-book/:bookid",
    //controller
    book_controller.delete_book
)

router.put(
    "/update-book/:update_id",
    //cb
    book_controller.update_book

)

module.exports = router