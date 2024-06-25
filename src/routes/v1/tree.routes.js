const express = require("express")
const { tree_controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-tree",
    //controller
    tree_controller.create_tree
)

router.get(
    "/list",
    //controller
    tree_controller.get_tree_c
)

router.delete(
    "/delete-tree",
    //controller
    tree_controller.delete_tree
)

//params
router.delete(
    "/delete-tree/:treeid",
    //controller
    tree_controller.delete_tree
)

router.put(
    "/update-tree/:update_id",
    //cb
    tree_controller.update_tree

)

module.exports = router