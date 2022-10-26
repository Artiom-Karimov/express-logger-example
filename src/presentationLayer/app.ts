import express from "express"
import http from 'http'

import TestRouter from "./testRouter"
import * as config from '../config/config'

export type AppConstructorParams = {
    testRouter?:TestRouter
    // anotherRouter?:AnotherRouter
}

export default class App {
    public readonly port: number = config.port
    public readonly server: http.Server

    constructor(params: AppConstructorParams) {
        const app = express()
        this.server = http.createServer(app)
        if(params.testRouter) app.use('/test', params.testRouter.getRouter())
    }

    public start = async () => {
        this.server.listen(this.port, () => {
            console.log(`Listenning on port ${this.port}`)
        })
    }
    public stop = async () => {
        this.server.close()
    }
}