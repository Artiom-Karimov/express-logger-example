import { Db } from "mongodb";
import LogRepository from './dataLayer/logRepository';
import GlobalErrorHandler from "./logicLayer/logging/globalErrorHandler";
import ILogger, { Logger } from './logicLayer/logging/logger';


export default class CompositionRoot {
    private readonly logRepo:LogRepository
    private readonly logger: ILogger
    private readonly errorHandler: GlobalErrorHandler

    constructor(private readonly db:Db) {
        this.logRepo = new LogRepository(this.db)
        this.logger = new Logger(this.logRepo)
        this.errorHandler = new GlobalErrorHandler(this.logger)
    }  
}
