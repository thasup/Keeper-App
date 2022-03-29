import React, { useEffect } from "react";
import { Alert, Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import { listNotes } from "../actions/noteActions";

function NoteScreen() {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { error, notes } = noteList;

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch, notes]);

  // const colorSelectedHandler = (color) => {
  //   if (color !== null) {
  //     onCreate(color);
  //   }
  // };

  // function deleteNote(id) {
  //   setNotes((prevNote) => {
  //     // Filter through an "notes" array to get rid of the one that match with "id"
  //     return prevNote.filter(
  //       // Loop through each note in previous "notes" array and get the "index" of each note
  //       (note) => {
  //         // Return only note that index "not match" with the id (the note that "match" the id is equal to got delete)
  //         return note.id !== id;
  //       }
  //     );
  //   });
  // }

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
            id={note.id}
            title={note.title}
            content={note.content}
            // onDelete={deleteNote}
          />
        ))}
      </Container>
    </Box>
  );
}

export default NoteScreen;
