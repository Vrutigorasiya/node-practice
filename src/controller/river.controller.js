const { river_service } = require("../services")

const create_river = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_river = await river_service.create_river_s(data)
        if(!new_river){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_river
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_river_c = async(req,res) => {
    try {
        //services
        const river_list = await river_service.get_river_s(req.body)
        if(!river_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:river_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_river = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.riverid

        //services
        // const id = req.body.id
        const result = await river_service.delete_river_s(id)
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

const update_river = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await river_service.update_river_s(id,data)
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
    create_river,
    get_river_c,
    delete_river,
    update_river
}