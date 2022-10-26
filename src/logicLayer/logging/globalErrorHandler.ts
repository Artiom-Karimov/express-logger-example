import ILogger from "./logger"

export default class GlobalErrorHandler {
    constructor(private readonly logger:ILogger) {
        process.on('uncaughtException', (error: Error) => this.handleError(error))
        process.on('unhandledRejection', (error: Error) => this.handleError(error))
    }
    public handleError = (error:Error) => {
        this.logger.error(error)
    }
}