import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import exphbs from 'express-handlebars';

//Importacion de las Rutas
import indexRouter from './routes/index.routes';
import ticketRouter from './routes/ticket.routes'

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.seting();
    this.handlebars();
    this.middleware();
    this.routers();
  }

  seting(): void {
    this.app.set('port', this.port || process.env.PORT || 3000);
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  handlebars() {
    this.app.engine('.hbs', exphbs({
      defaultLayout: 'main',
      layoutsDir: path.join(this.app.get("views"), "layouts"),
      partialsDir: path.join(this.app.get("views"), "partials"),
      extname: ".hbs",
    }));
    this.app.set("view engine", ".hbs");
  }

  middleware(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routers(): void {
    this.app.use('/', indexRouter);
    this.app.use('/ticket', ticketRouter)
  }

  async listen() {
    await this.app.listen(this.app.get('port'), () => {
      console.log(`Servidor Corriendo en el Puerto ${this.app.get('port')}`);
    });
  }
}