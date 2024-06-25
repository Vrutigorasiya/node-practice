const { admin_service } = require("../services")

const create_admin = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_admin = await admin_service.create_admin_s(data)
        if(!new_admin){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_admin
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_admin_c = async(req,res) => {
    try {
        //services
        const admin_list = await admin_service.get_admin_s(req.body)
        if(!admin_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:admin_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_admin = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.adminid

        //services
        // const id = req.body.id
        const result = await admin_service.delete_admin_s(id)
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

const update_admin = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await admin_service.update_admin_s(id,data)
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
    create_admin,
    get_admin_c,
    delete_admin,
    update_admin
}