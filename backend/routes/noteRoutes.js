import express from "express";
import { createNoteEndPoint, getNotes } from "../controllers/noteController.js";

const router = express.Router();

router.route("/").post(createNoteEndPoint);
router.route("/").get(getNotes);

export default router;
