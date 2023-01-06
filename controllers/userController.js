const { ObjectID } = require("bson");

const db = require("../db/connection.js").getDB();

const getAllUsers = async (req, res) => {
    try {
        const allUsersCursor = await db.collection("users").find();
        const allUsersArr = await allUsersCursor.toArray();
        res.status(200).json(allUsersArr);
    } catch (e) {
        console.log({ error: e });
    }
};

const getUserById = async (req, res) => {
    try {
        const userById = await db
            .collection("users")
            .find({ _id: ObjectID(req.params.userId) })
            .toArray();

        res.status(200).json(userById);
    } catch (e) {
        console.log({ error: e });
    }
};

const createUser = async (req, res)=>{
    try{
        const createdUser =  await db.collection("users").insertOne(
            req.body
        )
        res.status(200).json(createdUser);

    }catch (e){
        console.log({ error: e });
    }
}

const createManyUsers = async (req, res)=>{
    try{
        const createdUsers = await db.collection("users").insertMany(req.body)
        res.status(200).json(createdUsers);
    }catch (e){
        console.log({ error: e });
    }
}
module.exports = { getAllUsers, getUserById, createUser, createManyUsers };
