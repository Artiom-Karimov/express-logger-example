import http from 'http'
import { Db } from "mongodb";

import DatabaseConnection from "../dataLayer/databaseConnection";
import CompositionRoot from "../compositionRoot";
import LogRepository from '../dataLayer/logRepository';

const dbConnection = new DatabaseConnection()
let db: Db
let root: CompositionRoot
let server: http.Server
let logRepo: LogRepository

const start = async () => {
    db = await dbConnection.startTestMode()
    root = new CompositionRoot(db)
    server = root.app.server
    logRepo = root.logRepo
}
const stop = async () => {
    await root?.stop()
    await dbConnection.stop()
}
const delay = async (ms:number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export { 
    start,
    stop,
    delay,
    server,
    logRepo
}