const { contact_service } = require("../services")

const create_contact = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_contact = await contact_service.create_contact_s(data)
        if(!new_contact){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_contact
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_contact_c = async(req,res) => {
    try {
        //services
        const contact_list = await contact_service.get_contact_s(req.body)
        if(!contact_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:contact_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_contact = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.contactid

        //services
        // const id = req.body.id
        const result = await contact_service.delete_contact_s(id)
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

const update_contact = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await contact_service.update_contact_s(id,data)
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
    create_contact,
    get_contact_c,
    delete_contact,
    update_contact
}