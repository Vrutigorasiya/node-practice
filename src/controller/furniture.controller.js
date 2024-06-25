const { furniture_service } = require("../services")

const create_furniture = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_furniture = await furniture_service.create_furniture_s(data)
        if(!new_furniture){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_furniture
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_furniture_c = async(req,res) => {
    try {
        //services
        const furniture_list = await furniture_service.get_furniture_s(req.body)
        if(!furniture_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:furniture_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_furniture = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.furnitureid

        //services
        // const id = req.body.id
        const result = await furniture_service.delete_furniture_s(id)
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

const update_furniture = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await furniture_service.update_furniture_s(id,data)
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
    create_furniture,
    get_furniture_c,
    delete_furniture,
    update_furniture
}