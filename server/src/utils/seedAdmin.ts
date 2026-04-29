import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/Admin";

dotenv.config();

async function seed(){

await mongoose.connect(process.env.MONGO_URI!);

await Admin.create({

name:"Sara",

email:"admin@email.com",

password:"123456"

});

console.log("Admin created");

process.exit();

}

seed();