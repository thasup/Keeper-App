import express from "express";
import {
  createNoteEndPoint,
  deleteNoteEndPoint,
  getNotes,
} from "../controllers/noteController.js";

const router = express.Router();

router.route("/:id").delete(deleteNoteEndPoint);
router.route("/").post(createNoteEndPoint);
router.route("/").get(getNotes);

export default router;
