import express, {Application, Request, Response, NextFunction} from "express";
import * as Http from 'http';
import cors from "cors";
import path from "path";
import Controller from './interfaces/controller.interface'
import errorMiddleware from "./middlewares/error.middleware";

import SocketServer from "./socket";

export default class App {
    public readonly PORT = process.env.PORT || 5000;
    private app!: Application;
    private httpServer!: Http.Server;
    private socketServer!: SocketServer;

    constructor(controllers: Controller[]) {
        
        this.createApp();
        this.createHttpServer();
        this.createSocketServer();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandler();

        this.listen();
    };


    public listen(): void {
        this.httpServer.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);;            
        });
    };

    public getApp(): Application {
        return this.app;
    }

    public getSocketServer(): SocketServer {
        return this.socketServer;
    }

    private createApp(): void {
        this.app = express();
    };

    private createHttpServer(): void{
        this.httpServer = Http.createServer(this.app);
    };

    private createSocketServer(): void{
        this.socketServer = new SocketServer(this.httpServer);
        // this.socketServer = new SocketIO.Server(this.httpServer, {cors:{ origin: '*:*'}})
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.resolve('client/build')));
    };

    private initializeErrorHandler(): void {
        this.app.use(errorMiddleware);
    };

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach(controller => {
            this.app.use('/',controller.router);
        });
    };
}
