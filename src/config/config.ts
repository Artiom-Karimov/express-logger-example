const port:number = process.env.PORT ? Number(process.env.PORT) : 3000
const mongoUri:string = process.env.mongoUri || 'mongodb://0.0.0.0:27017'
const dbName:string = process.env.dbName || 'loggerTestDb'

export { port, mongoUri, dbName }