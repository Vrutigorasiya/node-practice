const { music_service } = require("../services")

const create_music = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_music = await music_service.create_music_s(data)
        if(!new_music){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_music
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_music_c = async(req,res) => {
    try {
        //services
        const music_list = await music_service.get_music_s(req.body)
        if(!music_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:music_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_music = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.musicid

        //services
        // const id = req.body.id
        const result = await music_service.delete_music_s(id)
        console.log(result);

        res.status(200).json({
            success:true,
            message:"data delete",
            id:id
        })

    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const update_music = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await music_service.update_music_s(id,data)
        if(!result){
            throw new Error("not updatedddd")
        }

        res.status(200).json({
            success:true,
            message:"data update",
            data:result
        })

    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    create_music,
    get_music_c,
    delete_music,
    update_music
}