import mongoose from "mongoose";
import dotenv from "dotenv";
import noteSample from "./data/noteSample.js";
import Note from "./models/noteModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Note.deleteMany();

        await Note.insertMany(noteSample);

        console.log("Data Imported!");
        process.exit();
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Note.deleteMany();

        console.log("Data Destroyed!");
        process.exit();
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
