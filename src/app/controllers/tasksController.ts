import { Request, Response } from 'express';

//Model
import Task from "../models/tasksModel";

class TasksController {

    public index(req: Request, res: Response) {
        res.status(200).render('tasks/create');
    }

    public async create(req: Request, res: Response) {
        const { titulo, descripcion } = req.body;
        const newTask = new Task({ titulo, descripcion })
        await newTask.save();
        res.status(200).redirect('/tasks/list')
    }

    public async list(req: Request, res: Response) {
        const tasks = await Task.find();
        res.status(200).render('tasks/list', { tasks });
    }

}

const tasksController = new TasksController();
export default tasksController;