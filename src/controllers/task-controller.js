const {TaskService}=require('../services/index');

const taskService=new TaskService();


// POST -> /tasks
const createTask=async(req,res)=>{
    try {
        const data={
            task_name:req.body.task_name
        }
        const task=await taskService.createTask(data);
        return res.status(201).json({
            data:task,
            success:true,
            message:'Successfully created a task',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create the task',
            err:error
        })
    }
}

// GET -> /tasks
const getAllTasks=async(req,res)=>{
    try {
        const tasks=await taskService.getAllTasks();
        return res.status(200).json({
            data:tasks,
            success:true,
            message:'Successfully fetched all the tasks',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the tasks',
            err:error
        })
    }
}


//Patch-> /tasks/:id
const updateTask=async(req,res)=>{
    try {
        const data={
            completed:req.body.completed
        }
        const response=await taskService.updateTask(data,req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully updated the task status',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the task status',
            err:error
        })
    }
}

//DELETE -> /tasks/:id
const deleteTask=async(req,res)=>{
    try {
        const response=await taskService.deleteTask(req.params.id);
        return res.status(200).json({
            success:true,
            message:'Successfully deleted the task',
            err:{}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the task',
            err:error
        })
    }
}

module.exports={
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
}