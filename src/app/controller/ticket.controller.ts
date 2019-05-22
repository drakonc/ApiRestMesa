import { Request, Response } from 'express';

class TicketController {

    public addTicket(req: Request, res: Response){
        res.render('ticket/addticket')
    }
}

const ticketController = new TicketController();
export default ticketController;