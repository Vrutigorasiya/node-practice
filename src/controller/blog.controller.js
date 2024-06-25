const { blog_service } = require("../services")

const create_blog = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_blog = await blog_service.create_blog_s(data)
        if(!new_blog){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_blog
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_blog_c = async(req,res) => {
    try {
        //services
        const blog_list = await blog_service.get_blog_s(req.body)
        if(!blog_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:blog_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_blog = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.blogid

        //services
        // const id = req.body.id
        const result = await blog_service.delete_blog_s(id)
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

const update_blog = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await blog_service.update_blog_s(id,data)
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
    create_blog,
    get_blog_c,
    delete_blog,
    update_blog
}