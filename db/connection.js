const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.

/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
*/


async function main() {
    // we'll add code here soon
    const uri = `mongodb://127.0.0.1:27017/`;
    
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    async function listDatabases(client){
        databasesList = await client.db().admin().listDatabases();
     
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


main().catch(console.error);
