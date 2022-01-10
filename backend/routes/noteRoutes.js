import express, { Router } from "express";
import { createNote } from "../controllers/noteController";

const router = express.Router();

router.route("/").post(createNote);

export default router;
