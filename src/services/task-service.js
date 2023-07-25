const { TaskRepository } = require("../repository/index");

class TaskService {
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async createTask(data) {
        try {
            const task=await this.taskRepository.createTask(data);
            return task;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }

    async getAllTasks() {
        try {
            const tasks=await this.taskRepository.getAllTasks();
            return tasks;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }

    async updateTask(data,taskId) {
        try {
            const task=await this.taskRepository.updateTask(data,taskId);
            return task;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }

    async deleteTask(taskId) {
        try {
            const response=await this.taskRepository.deleteTask(taskId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }
   
}


module.exports=TaskService;