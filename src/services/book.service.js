const { Book } = require("../model")

const create_book_s = (data) => {
    console.log("servicessss");
    return Book.create(data)
}

const get_book_s = () => {
    return Book.find()
}

const delete_book_s = (id) => {
    return Book.findByIdAndDelete(id)
}

const update_book_s = (id,data) => {
    return Book.findByIdAndUpdate(id,data)
}


module.exports = {
    create_book_s,
    get_book_s,
    delete_book_s,
    update_book_s
}