const { Blog } = require("../model")

const create_blog_s = (data) => {
    console.log("servicessss");
    return Blog.create(data)
}

const get_blog_s = () => {
    return Blog.find()
}

const delete_blog_s = (id) => {
    return Blog.findByIdAndDelete(id)
}

const update_blog_s = (id,data) => {
    return Blog.findByIdAndUpdate(id,data)
}


module.exports = {
    create_blog_s,
    get_blog_s,
    delete_blog_s,
    update_blog_s
}