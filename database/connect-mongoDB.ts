import mongoose from 'mongoose'
import config from 'config'
import log from '../utils/logger'

const mongoURI = config.get<string>('dbURI')
const connectMongoDB = async () => {
    try {
        const connect = await mongoose.connect(mongoURI)
        log.info(`Connected database successful ${connect.connection.host}`)
    } catch (error) {
        log.info(`Connected database fail ${error}`)
        process.exit(1)   
    }
}

export default connectMongoDB;