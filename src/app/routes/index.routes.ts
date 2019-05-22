import { Router } from 'express';
import indexController from '../controller/index.controller';

class IndexRouter {

    public router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', indexController.index);
    }

}

const indexRouter = new IndexRouter();
export default indexRouter.router;