import { Router } from "express";
import tasksController from "../controllers/tasksController";

class TasksRouter {

    public router: Router;

    constructor() {
        this.router = Router()
        this.config();
    }

    private config(): void {
        this.router.get('/create', tasksController.createForm);
        this.router.post('/create', tasksController.create);
        this.router.get('/list', tasksController.list);
        this.router.get('/delete/:id', tasksController.delete);
        this.router.get('/edit/:id', tasksController.editForm);
        this.router.post('/edit/:id', tasksController.edit);
    }

}

const tasksRouter = new TasksRouter();
export default tasksRouter.router;