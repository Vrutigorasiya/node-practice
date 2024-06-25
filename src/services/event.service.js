const { Event } = require("../model")

const create_event_s = (data) => {
    console.log("servicessss");
    return Event.create(data)
}

const get_event_s = () => {
    return Event.find()
}

const delete_event_s = (id) => {
    return Event.findByIdAndDelete(id)
}

const update_event_s = (id,data) => {
    return Event.findByIdAndUpdate(id,data)
}


module.exports = {
    create_event_s,
    get_event_s,
    delete_event_s,
    update_event_s
}