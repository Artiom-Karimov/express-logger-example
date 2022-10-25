import { Db, MongoClient } from "mongodb"
import { MongoMemoryServer } from "mongodb-memory-server"
import * as config from '../config/config'

export default class DatabaseConnection {
    private testingMongoServer: MongoMemoryServer|undefined
    private mongoClient: MongoClient|undefined 
    public db: Db|undefined
    
    public stop = async () => {
        await this.mongoClient?.close()
        await this.testingMongoServer?.stop()
    }

    public startTestMode = async (): Promise<Db> => {
        this.testingMongoServer = await MongoMemoryServer.create()
        const uri = this.testingMongoServer.getUri()
        return this.startProductionMode(uri)
    }
    public startProductionMode = async (uri:string): Promise<Db> => {
        this.mongoClient = new MongoClient(uri)
        await this.mongoClient.connect()
        this.db = this.mongoClient.db(config.dbName)
        return this.db
    }
}