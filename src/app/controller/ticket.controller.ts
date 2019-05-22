import { Request, Response } from 'express';

class TicketController {

    public addTicket(req: Request, res: Response) {
        let list: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
        let p: any[] = [{ nom: 'hola' }, { nom: 'mundo' }]
        res.render('ticket/addticket', { list, p })
    }

}

const ticketController = new TicketController();
export default ticketController;