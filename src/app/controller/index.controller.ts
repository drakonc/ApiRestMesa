import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.status(200).json({mensaje: 'Bienbenido'})
    }

}

const indexController = new IndexController();
export default indexController;