import { Request, Response } from 'express';

class IndexController {

    public async index(req: Request, res: Response) {
        res.render('index/index');
    }

}

const indexController = new IndexController();
export default indexController;