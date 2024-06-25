const { Contact } = require("../model")

const create_contact_s = (data) => {
    console.log("servicessss");
    return Contact.create(data)
}

const get_contact_s = () => {
    return Contact.find()
}

const delete_contact_s = (id) => {
    return Contact.findByIdAndDelete(id)
}

const update_contact_s = (id,data) => {
    return Contact.findByIdAndUpdate(id,data)
}


module.exports = {
    create_contact_s,
    get_contact_s,
    delete_contact_s,
    update_contact_s
}