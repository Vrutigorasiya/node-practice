const { recipe_service } = require("../services")

const create_recipe = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_recipe = await recipe_service.create_recipe_s(data)
        if(!new_recipe){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_recipe
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_recipe_c = async(req,res) => {
    try {
        //services
        const recipe_list = await recipe_service.get_recipe_s(req.body)
        if(!recipe_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:recipe_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_recipe = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.recipeid

        //services
        // const id = req.body.id
        const result = await recipe_service.delete_recipe_s(id)
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

const update_recipe = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await recipe_service.update_recipe_s(id,data)
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
    create_recipe,
    get_recipe_c,
    delete_recipe,
    update_recipe
}