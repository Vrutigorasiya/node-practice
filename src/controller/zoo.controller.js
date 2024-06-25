const { zoo_service } = require("../services")

const create_zoo = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_zoo = await zoo_service.create_zoo_s(data)
        if(!new_zoo){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_zoo
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_zoo_c = async(req,res) => {
    try {
        //services
        const zoo_list = await zoo_service.get_zoo_s(req.body)
        if(!zoo_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:zoo_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_zoo = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.zooid

        //services
        // const id = req.body.id
        const result = await zoo_service.delete_zoo_s(id)
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

const update_zoo = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await zoo_service.update_zoo_s(id,data)
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
    create_zoo,
    get_zoo_c,
    delete_zoo,
    update_zoo
}