const {MongoClient} = require('mongodb')
const dbConnectionUrl = 'mongodb://127.0.0.1:27017/'
const client = new MongoClient(dbConnectionUrl);

const dbConnection = async()=>{
    await client.connect();
   const db =  client.db("schoolDB");
   return db;
}

module.exports={dbConnection};

