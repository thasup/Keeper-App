import React, { useEffect, useState } from "react";
import { Alert, Box, CircularProgress, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import { createNote, deleteNote, listNotes } from "../actions/noteActions";

function NoteScreen() {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);

  const noteList = useSelector((state) => state.noteList);
  const { error, notes } = noteList;

  const deleteNoteState = useSelector((state) => state.deleteNoteState);
  const {
    loading: loadingDeleteNote,
    success: successDeleteNote,
    error: errorDeleteNote,
  } = deleteNoteState;

  useEffect(() => {
    dispatch(listNotes());

    setTimeout(() => {
      setIsShow(false);
    }, 3000);
  }, [dispatch, successDeleteNote, errorDeleteNote]);

  const submitNoteHandler = async (note) => {
    await dispatch(createNote(note));

    await dispatch(listNotes());
  };

  const deleteNoteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      await dispatch(deleteNote(id));
    }

    setIsShow(true);
  };

  return (
    <>
      {isShow && (
        <Alert
          severity="success"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Successfully removed note!
        </Alert>
      )}
      {errorDeleteNote && isShow && (
        <Alert
          severity="error"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Oops! something went wrong
        </Alert>
      )}
      {loadingDeleteNote ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Box>
          <CreateArea onCreate={submitNoteHandler} />
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
      )}
    </>
  );
}

export default NoteScreen;
