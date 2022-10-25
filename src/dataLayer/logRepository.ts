import { Collection, Db, WithId } from "mongodb";
import MessageModel from "../logicLayer/logging/messageModel";

export default class LogRepository {
    private readonly logs: Collection<MessageModel>
    constructor(db:Db) {
        this.logs = db.collection<MessageModel>('log')
    }
    public write = async (data:MessageModel) => {
        try {
            await this.logs.insertOne(data)
        } catch (error) {
            console.error(error)
        }
    }
}