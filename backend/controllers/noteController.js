import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";

// @desc    Fetch all notes
// @route    GET /api/notes
// @access    Public
export const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({});
  res.json({ notes });
});

// @desc    Create note
// @route    POST /api/notes/
// @access      Public
export const createNoteEndPoint = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  console.log({ title, content });

  //   if (noteExist) {
  //     res.status(400);
  //     throw new Error("Note already existed");
  //   }

  const newNote = await Note.create({
    title,
    content,
  });

  if (newNote) {
    res.status(201).json({
      noteTitle: newNote.title,
      noteContent: newNote.content,
    });
  } else {
    res.status(400);
    throw new Error("Invalid note data");
  }
});
