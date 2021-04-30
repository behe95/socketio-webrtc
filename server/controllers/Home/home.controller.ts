import { Request, response, Response, Router } from "express";
import path from "path";
import Controller from "../../interfaces/controller.interface";
import settings from "../../settings";

export default class HomeController implements Controller {

    public path = "*"
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path, this.homeController);
    };

    private homeController = async (request: Request, respone: Response) => {
        // console.log(path.resolve('client'));
        
        const root = path.resolve(settings.PROJECT_DIR,'client', 'build');

        response.sendFile('index.html', {root});
    };


}