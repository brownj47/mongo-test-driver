const express = require("express");
require("dotenv").config();
const { connectDB, getDB } = require("./db/connection.js");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",apiRoutes);

const start = async () => {
    try {
        await connectDB();

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
