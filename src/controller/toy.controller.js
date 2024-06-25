const { toy_service } = require("../services")

const create_toy = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_toy = await toy_service.create_toy_s(data)
        if(!new_toy){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_toy
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_toy_c = async(req,res) => {
    try {
        //services
        const toy_list = await toy_service.get_toy_s(req.body)
        if(!toy_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:toy_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_toy = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.toyid

        //services
        // const id = req.body.id
        const result = await toy_service.delete_toy_s(id)
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

const update_toy = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await toy_service.update_toy_s(id,data)
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
    create_toy,
    get_toy_c,
    delete_toy,
    update_toy
}