const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log("db connected");
    } catch (e) {
        console.error(e);
    }
};

const getDB = () => {
    return client.db("dating_DB");
};

module.exports = {
    connectDB,
    getDB,
};

module.exports = { connectDB, getDB };
