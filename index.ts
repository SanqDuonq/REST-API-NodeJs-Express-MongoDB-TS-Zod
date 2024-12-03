import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import config from 'config'
import connectMongoDB from './database/connect-mongoDB'
import log from './utils/logger'
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = config.get<number>('port')

app.listen(port,() => {
    log.info(`App start at http://localhost:${port}`)
    connectMongoDB();
})