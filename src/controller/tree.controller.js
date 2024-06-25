const { tree_service } = require("../services")

const create_tree = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_tree = await tree_service.create_tree_s(data)
        if(!new_tree){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_tree
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_tree_c = async(req,res) => {
    try {
        //services
        const tree_list = await tree_service.get_tree_s(req.body)
        if(!tree_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:tree_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_tree = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.treeid

        //services
        // const id = req.body.id
        const result = await tree_service.delete_tree_s(id)
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

const update_tree = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await tree_service.update_tree_s(id,data)
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
    create_tree,
    get_tree_c,
    delete_tree,
    update_tree
}