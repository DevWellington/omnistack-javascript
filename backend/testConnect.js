
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://semana:semana@localhost/week10?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("week10").collection("developers");
  console.log(collection)
  // perform actions on the collection object
  client.close();
});

