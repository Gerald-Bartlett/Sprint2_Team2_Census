const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://dave:Aident2014@cluster0.wbdu9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const pool = new MongoClient(uri);

module.exports = pool;
