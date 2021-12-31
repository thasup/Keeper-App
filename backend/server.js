import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
