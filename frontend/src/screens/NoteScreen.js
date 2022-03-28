import React, { useEffect, useState } from "react";
import { Alert, Box, CircularProgress, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import { listNotes } from "../actions/noteActions";

function NoteScreen() {
  const dispatch = useDispatch();

  const [onCreate, setOnCreate] = useState(false);

  const noteList = useSelector((state) => state.noteList);
  const { error, notes } = noteList;

  useEffect(() => {
    console.log("RUN!!!", onCreate);
    dispatch(listNotes());
  }, [dispatch, onCreate]);

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
      <CreateArea setOnCreate={setOnCreate} />
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
      {onCreate ? (
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
        <>
          {notes.map((note, index) => (
            <Note
              key={index}
              id={note.id}
              title={note.title}
              content={note.content}
              // onDelete={deleteNote}
            />
          ))}
        </>
      )}
    </Box>
  );
}

export default NoteScreen;
