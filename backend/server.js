import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

const port = process.env.PORT || 5001;

app.listen(
    port,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${port}.`
    )
);
