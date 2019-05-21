import { Request, Response } from "express";

class IndexController {

    public index (req: Request, res: Response) {
        res.status(200).send('Aplicacion de Mesa de Servicio');
    }

}

const indexController = new IndexController();
export default indexController;