const mongoose = require('mongoose');

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const dbName = 'Market';

const mongoUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@marketcluster.tubhtkj.mongodb.net/${dbName}?retryWrites=true&w=majority`;



async function main() {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to the MongoDB database');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

main();