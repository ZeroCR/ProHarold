const MongoClient = require('mongodb').MongoClient;
let db;

const initDb = async () => {
    try {
        // Connection url
        const url = 'mongodb+srv://test1234:test1234@cluster0-luh7k.mongodb.net/test?retryWrites=true&w=majority';
        // Database Name
        const dbName = 'pro_Harol_DB';
        // Connect using MongoClient
        const client = await MongoClient.connect(url)
        console.log('Connected...');
        db = client.db(dbName)
        return db
    } catch(error) {
        console.log(error)
    }
    
}

const getDb = ()=> {
    return db
}

module.exports = {
    initDb,
    getDb,
  }
  