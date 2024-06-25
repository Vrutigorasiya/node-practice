const { student_service } = require("../services")

const create_student = async(req,res) => {
    try {
        //service
        const data = req.body
        console.log(req.body);
        const new_student = await student_service.create_student_s(data)
        if(!new_student){
            throw new Error("something went wrong")
        }

        res.status(200).json({
            success:true,
            message:"Route got hitted",
            data:new_student
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_student_c = async(req,res) => {
    try {
        //services
        const student_list = await student_service.get_student_s(req.body)
        if(!student_list){
            throw new Error("Data not found")
        }
        res.status(200).json({
            success:true,
            message:"data get",
            data:student_list
        })
    } catch (error) {
        //error
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}

const delete_student = async(req,res) => {
    try {
        //params
        console.log(req.params);
        const id = req.params.studentid

        //services
        // const id = req.body.id
        const result = await student_service.delete_student_s(id)
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

const update_student = async(req,res) => {
    try {
        //id => services
        //data = > services
        const id = req.params.update_id
        const data = req.body

        const result = await student_service.update_student_s(id,data)
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
    create_student,
    get_student_c,
    delete_student,
    update_student
}