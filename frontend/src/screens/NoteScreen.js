import React, { useEffect } from "react";
import { Alert, Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import { deleteNote, listNotes } from "../actions/noteActions";

function NoteScreen() {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { error, notes } = noteList;

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch, notes]);

  const deleteNoteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <Box>
      <CreateArea />
      {error && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert severity="error">Oops! something went wrong</Alert>
        </div>
      )}
      <Container>
        {notes.map((note, index) => (
          <Note
            key={index}
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNoteHandler}
          />
        ))}
      </Container>
    </Box>
  );
}

export default NoteScreen;
