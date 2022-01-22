import express from "express";
import { createNoteEndPoint } from "../controllers/noteController.js";

const router = express.Router();

router.route("/").post(createNoteEndPoint);

export default router;
