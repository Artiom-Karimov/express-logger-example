import { Request, Response, Router } from "express";
import IRouter from "./router";
import * as config from '../config/config'
import LogRepository from "../dataLayer/logRepository";
import MessageFormatter from "./messageFormatter";

export default class TestRouter implements IRouter {
    private readonly router = Router()

    constructor(private readonly repo:LogRepository) {
        this.setRoutes()
    }

    public getRouter(): Router {
        return this.router
    }
    
    private setRoutes() {
        this.router.get('/', async (req:Request,res:Response) => {            
            res.status(200).send(`<h3>Hell-o. To test error handling <a href="http://localhost:${config.port}/error">make an error.</a></h3>`)
        })
        this.router.get('/error', async (req:Request,res:Response) => {            
            res.status(200).send(`<h3>Nice. Now <a href="http://localhost:${config.port}/list">check error list</a></h3>`)
            throw new Error('whoops!')
        })
        this.router.get('/list', async (req:Request,res:Response) => {  
            const messages = await this.repo.get()       
            res.status(200).send(MessageFormatter.format(messages))
        })
    }
}