import LogRepository from "../../dataLayer/logRepository";
import MessageModel, { MessageLevel } from "./messageModel";


export default interface ILogger {
    log(message:string, level?:MessageLevel): Promise<void>
}

export class Logger implements ILogger {
    constructor(private readonly repo:LogRepository) {}

    public log = async (message: string, level: MessageLevel = MessageLevel.Info) => {
        await this.repo.write(new MessageModel(message,level))
    }
}