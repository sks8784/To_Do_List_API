const validateCreateTask=(req,res,next)=>{
    if(
        !req.body.task_name
    ){
        return res.status(400).json({
            data:{},
            success:false,
            message:'Invalid request body for create task',
            err:'Missing mandatory properties to create task'
        });
    }

    next();
}

module.exports={
    validateCreateTask
}