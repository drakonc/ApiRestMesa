import { Router } from 'express';
import tsolicitudController from '../controller/tsolicitud.controller';

class TSolicitudRouter {

    public router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/tsolicitud', tsolicitudController.listar);
        this.router.get('/tsolicitud/:id', tsolicitudController.listarOne);
        this.router.post('/tsolicitud', tsolicitudController.insertar);
        this.router.put('/tsolicitud/:id', tsolicitudController.actualizar);
        this.router.delete('/tsolicitud/:id', tsolicitudController.eliminar);
    }

}

const tsolicitudRouter = new TSolicitudRouter();
export default tsolicitudRouter.router;