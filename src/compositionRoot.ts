import { Db } from "mongodb";
import LogRepository from './dataLayer/logRepository';
import GlobalErrorHandler from "./logicLayer/logging/globalErrorHandler";
import ILogger, { Logger } from './logicLayer/logging/logger';
import App from "./presentationLayer/app";
import TestRouter from "./presentationLayer/testRouter";


export default class CompositionRoot {
    public readonly logRepo: LogRepository
    public readonly logger: ILogger
    public readonly errorHandler: GlobalErrorHandler

    public readonly testRouter: TestRouter
    public readonly app: App

    constructor(private readonly db: Db) {
        this.logRepo = new LogRepository(this.db)
        this.logger = new Logger(this.logRepo)
        this.errorHandler = new GlobalErrorHandler(this.logger)
        this.testRouter = new TestRouter(this.logRepo)
        this.app = new App({ testRouter: this.testRouter })
    }

    public start = async () => this.app.start()
    public stop = async () => this.app.stop()
}
