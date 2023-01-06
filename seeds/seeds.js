require("dotenv").config();
const { createManyUsers } = require("../controllers/userController");
const { connectDB, getDB } = require("../db/connection");

const users = [
    {
        username: "george",
        password: "test",
        prefs:"yellow",
    },
    {
        username: "John",
        password: "test1",
        prefs:"yellow",
    },
    {
        username: "Bob",
        password: "test2",
        prefs:"yellow",
    },
    {
        username: "Frederick",
        password: "test3",
        prefs:"yellow4",
    },
    {
        username: "Iko",
        password: "test5",
        prefs:"yellow6",
    },
    {
        username: "Boop",
        password: "test6",
        prefs:"yellow",
    },
    {
        username: "ice cream",
        password: "test6",
        prefs:"yellow6",
    }
]

const seed = async () => {
    try {
        await connectDB();
        const db = getDB();
        console.log("DB", db)
        const deleted = await db.collection("users").deleteMany();
        console.log("Deleted!" ,deleted)
        const insert = await db.collection("users").insertMany(users);
        console.log("Inserted" ,insert)

        process.exit(0);
    } catch (err) {
        console.log({ err });
        process.exit(1);
    }
};

seed();
