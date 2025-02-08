import mongoose from "mongoose";

// function to make connection with database
const Connection = async () => {
  const URL = `mongodb://devesh18:Devudev1808@cluster0-shard-00-00.tcj4v.mongodb.net:27017,cluster0-shard-00-01.tcj4v.mongodb.net:27017,cluster0-shard-00-02.tcj4v.mongodb.net:27017/?ssl=true&replicaSet=atlas-bystxc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true }); //since mongoose is 'asynchronous' func, so it returns a promise, so we need to use async await
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
