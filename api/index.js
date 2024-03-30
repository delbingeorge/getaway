import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import { signup as authRoutes } from "./controllers/auth.controller.js";

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

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is up!");
});

app.use("/api/user", userRoutes);

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({ success: false, statusCode, message });
});
