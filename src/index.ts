import DatabaseConnection from "./dataLayer/databaseConnection";
import * as config from './config/config'
import CompositionRoot from "./compositionRoot";

const dbConnection = new DatabaseConnection()

const run = async () => {
    const db = await dbConnection.startProductionMode(config.mongoUri)
    const root = new CompositionRoot(db)
    await root.start()
}

run()