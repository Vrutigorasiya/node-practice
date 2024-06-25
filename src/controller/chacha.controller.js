const { chacha_service } = require("../services")

const create_chacha = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_chacha = await chacha_service.create_chacha_s(data)
        if(!new_chacha){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_chacha
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_chacha_c = async(req,res) => {
    try {
        //services
        const chacha_list = await chacha_service.get_chacha_s(req.body)
        if(!chacha_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:chacha_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_chacha = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.chachaid

        //services
        // const id = req.body.id
        const result = await chacha_service.delete_chacha_s(id)
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

const update_chacha = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await chacha_service.update_chacha_s(id,data)
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
    create_chacha,
    get_chacha_c,
    delete_chacha,
    update_chacha
}