const {Tasks}=require('../models/index');

class TaskRepository{

    async createTask(data){
        try{
            const task=await Tasks.create(data);
            return task;
        }catch(error){
            console.log("Something went wrong in the repository layer");    
            throw{error};
        }
    }

    async getAllTasks(){
        try {
            const tasks=await Tasks.findAll();
            return tasks;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateTask(data,taskId){
        try {
            const task=await Tasks.findByPk(taskId);
            task.completed=data.completed;
            await task.save();
            return task;

        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async deleteTask(taskId){
        try {
            await Tasks.destroy({
                where:{
                    id:taskId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports=TaskRepository;