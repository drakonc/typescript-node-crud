import { Request, Response } from 'express';

//Model
import Task from "../models/tasksModel";

class TasksController {

    public createForm(req: Request, res: Response) {
        res.status(200).render('tasks/create');
    }

    public async create(req: Request, res: Response) {
        const { titulo, descripcion } = req.body;
        try {
            const newTask = new Task({ titulo, descripcion })
            await newTask.save();
            res.status(200).redirect('/tasks/list')
        } catch (error) {
            console.log(error)
        }
    }

    public async list(req: Request, res: Response) {
        const tasks = await Task.find();
        res.status(200).render('tasks/list', { tasks });
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await Task.findByIdAndDelete(id);
            res.status(200).redirect('/tasks/list')
        } catch (error) {
            console.log(error)
        }
    }

    public async editForm(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const task = await Task.findById(id)
            res.status(200).render('tasks/edit', { task });
        } catch (error) {
            console.log(error)
        }
    }

    public async edit(req: Request, res: Response) {
        const { id } = req.params;
        const { titulo, descripcion } = req.body;
        try {
            await Task.findByIdAndUpdate(id, { titulo, descripcion })
            res.status(200).redirect('/tasks/list');
        } catch (error) {

        }
    }
}

const tasksController = new TasksController();
export default tasksController;