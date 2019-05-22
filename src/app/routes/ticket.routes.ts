import { Router } from 'express';
import ticketController from '../controller/ticket.controller';

class TicketRouter {

    public router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', ticketController.addTicket )
    }

}

const ticketRouter = new TicketRouter();
export default ticketRouter.router;