const mongoose = require('mongoose');

//take the env vaes
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = 'Market';

const mongoUri = `mongodb+srv://${dbUser}:${dbPassword}@marketcluster.tubhtkj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

async function main() {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to the MongoDB database');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

main();