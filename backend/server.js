import path from "path";
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

// Mimic "__dirname" in ES Module nodeJS
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

const port = process.env.PORT || 5001;

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}.`)
);
