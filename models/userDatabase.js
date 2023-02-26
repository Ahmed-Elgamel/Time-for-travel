const dotenv = require('dotenv');
dotenv.config();

const userDao = require('./userDao.js');

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = process.env.mongoURL;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = class databaseConnection{ 
  static connectToDatabase(app, port) {
    MongoClient.connect(
      url,
      {
        maxPoolSize: 100,
        wtimeoutMS: 2500,
        useNewUrlParser: true
      }
    ).catch(err => {
      console.error(err.stack);
      process.exit(1);
    }).then(async client => {
      await userDao.injectDB(client);
      app.listen(port, () => {
          console.log(`Listening on Port ${port}`);
      });
    
    });
  }
}




  