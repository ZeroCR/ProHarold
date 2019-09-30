const mongoDb = require('./db');
const collectionName = "users";
const getUsers = async () => {
    try {
        const db = mongoDb.getDb()
        const collection = db.collection(collectionName);
        const users = await collection.find()
        return users
    } catch (error) {
        return { error }
    }
 };

const getUser = async (userId) => {
    try {
        const db = mongoDb.getDb()
        const collection = db.collection(collectionName);
        const user = await collection.findOne({_id: userId})
        return user
    } catch (error) {
        return { error }
    }
 };

const addUser = async (user) => {
    try {
        const db = mongoDb.getDb()
        const collection = db.collection(collectionName);
        await collection.insertOne(user)
        return { succeed: true }
    } catch (error) {
        return { error }
    }
 };

 const updateUser = async (user) => {
    try {
        const db = mongoDb.getDb()
        const collection = db.collection(collectionName);
        await collection.updateOne({ _id: user._id }, { $set: { name: user.name}})
        return { succeed: true }
    } catch (error) {
        return { error }
    }
 };

 const deleteUser = async (userId) => {
    try {
        const db = mongoDb.getDb()
        const collection = db.collection(collectionName);
        await collection.deleteOne({ _id: userId })
        return { succeed: true }
    } catch (error) {
        return { error }
    }
 };
 module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers,
 }