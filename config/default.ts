import dotenv from 'dotenv';
dotenv.config();

export default {
    port: 1337,
    dbURI: process.env.MongoURI
}