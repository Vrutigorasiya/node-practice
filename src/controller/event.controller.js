const { event_service } = require("../services")

const create_event = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_event = await event_service.create_event_s(data)
        if(!new_event){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_event
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_event_c = async(req,res) => {
    try {
        //services
        const event_list = await event_service.get_event_s(req.body)
        if(!event_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:event_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_event = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.eventid

        //services
        // const id = req.body.id
        const result = await event_service.delete_event_s(id)
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

const update_event = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await event_service.update_event_s(id,data)
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
    create_event,
    get_event_c,
    delete_event,
    update_event
}