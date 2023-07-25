const express=require('express');

const {TaskMiddleware}=require('../../middlewares/index')

const TaskController=require('../../controllers/task-controller');

const router=express.Router();

router.post('/tasks',TaskMiddleware.validateCreateTask,TaskController.createTask);
router.get('/tasks',TaskController.getAllTasks);
router.patch('/tasks/:id',TaskController.updateTask);
router.delete('/tasks/:id',TaskController.deleteTask);

module.exports=router;