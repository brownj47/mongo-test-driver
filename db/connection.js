const { MongoClient } = require("mongodb");

const uri = `mongodb://127.0.0.1:27017/`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db = client.db("dating_db");

export { db };
