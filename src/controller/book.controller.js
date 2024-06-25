const { book_service } = require("../services")

const create_book = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_book = await book_service.create_book_s(data)
        if(!new_book){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_book
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_book_c = async(req,res) => {
    try {
        //services
        const book_list = await book_service.get_book_s(req.body)
        if(!book_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:book_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_book = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.bookid

        //services
        // const id = req.body.id
        const result = await book_service.delete_book_s(id)
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

const update_book = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await book_service.update_book_s(id,data)
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
    create_book,
    get_book_c,
    delete_book,
    update_book
}