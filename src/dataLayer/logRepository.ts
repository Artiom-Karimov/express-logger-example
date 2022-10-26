import { Collection, Db, WithId } from "mongodb";
import MessageModel from "../logicLayer/logging/messageModel";

export default class LogRepository {
    private readonly logs: Collection<MessageModel>

    constructor(db:Db) {
        this.logs = db.collection<MessageModel>('log')
    }
    public write = async (data:MessageModel) => {
        await this.logs.insertOne(data)
    }
    public get = async (limit:number = 10): Promise<MessageModel[]> => {
        try {
            const result = await this.logs.find({}).sort('createdAt', 1).limit(limit).toArray()
            return result.map(msg => MessageModel.copy(msg))
        } catch (error) {
            return []
        }
    }
}