import LogRepository from "../../dataLayer/logRepository";
import MessageModel, { MessageLevel } from "./messageModel";


export default interface ILogger {
    log(message:string, level?:MessageLevel): Promise<void>
    error(err:any): Promise<void>
}

export class Logger implements ILogger {
    constructor(private readonly repo:LogRepository) {}

    public log = async (message: string, level: MessageLevel = MessageLevel.Info) => {
        await this.repo.write(new MessageModel(message,level))
    }
    public error = async (err:any) => {
        let msg: MessageModel

        if(err instanceof Error) {
            msg = new MessageModel(
                `${err.name}: ${err.message}`,
                MessageLevel.Error,
                err.stack
                )
        }
        else {
            msg = new MessageModel(err,MessageLevel.Error)
        }

        await this.repo.write(msg)
    }
}