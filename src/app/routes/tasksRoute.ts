import { Router } from "express";
import tasksController from "../controllers/tasksController";

class TasksRouter {

    public router: Router;

    constructor() {
        this.router = Router()
        this.config();
    }

    private config(): void {
        this.router.get('/create', tasksController.index);
        this.router.post('/create', tasksController.create)
        this.router.get('/list', tasksController.list)
    }

}

const tasksRouter = new TasksRouter();
export default tasksRouter.router;