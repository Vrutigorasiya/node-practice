const { Music } = require("../model")

const create_music_s = (data) => {
    console.log("servicessss");
    return Music.create(data)
}

const get_music_s = () => {
    return Music.find()
}

const delete_music_s = (id) => {
    return Music.findByIdAndDelete(id)
}

const update_music_s = (id,data) => {
    return Music.findByIdAndUpdate(id,data)
}


module.exports = {
    create_music_s,
    get_music_s,
    delete_music_s,
    update_music_s
}