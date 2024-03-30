import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected with Mongo DB!");
    })
    .catch((err) => {
        console.log("The error is: ", err);
    });

const app = express();

app.listen(3000, () => {
    console.log("Server is up!");
});
