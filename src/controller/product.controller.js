const { product_service } = require("../services")

const create_product = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_product = await product_service.create_product_s(data)
        if(!new_product){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_product
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_product_c = async(req,res) => {
    try {
        //services
        const product_list = await product_service.get_product_s(req.body)
        if(!product_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:product_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_product = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.productid

        //services
        // const id = req.body.id
        const result = await product_service.delete_product_s(id)
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

const update_product = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await product_service.update_product_s(id,data)
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
    create_product,
    get_product_c,
    delete_product,
    update_product
}