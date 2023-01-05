const express = require("express");
require("dotenv").config();
const { connectDB, getDB } = require("./db/connection.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
    try {
        await connectDB();
        const db = getDB();

        const add = await db.collection("users").insertOne({
            name: "Bob",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        });
        console.log(add)

        app.listen(process.env.PORT, () => {
            console.log(
                `API server running on port http://localhost:${process.env.PORT} !`
            );
        });
    } catch (e) {
        console.error(e);
    }
};

start();

app.get("/", (req, res) => {
    console.log(db);
});
