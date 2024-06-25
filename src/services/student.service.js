const { Student } = require("../model")

const create_student_s = (data) => {
    console.log("servicessss");
    return Student.create(data)
}

const get_student_s = () => {
    return Student.find()
}

const delete_student_s = (id) => {
    return Student.findByIdAndDelete(id)
}

const update_student_s = (id,data) => {
    return Student.findByIdAndUpdate(id,data)
}


module.exports = {
    create_student_s,
    get_student_s,
    delete_student_s,
    update_student_s
}