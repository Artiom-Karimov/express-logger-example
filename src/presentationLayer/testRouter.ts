import { Request, Response, Router } from "express";
import IRouter from "./router";

export default class TestRouter implements IRouter {
    private readonly router = Router()

    constructor() {
        this.setRoutes()
    }

    public getRouter(): Router {
        return this.router
    }
    
    private setRoutes() {
        this.router.get('/', async (req:Request,res:Response) => {
            res.status(200).send('<h2>Hell-o</h2>')
        })
        this.router.get('/error', async (req:Request,res:Response) => {            
            res.status(200).send('<h2>Hell-no :(</h2>')
            throw new Error('whoops!')
        })
    }
}