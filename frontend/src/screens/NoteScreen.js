import React, { useState } from "react";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";

function NoteScreen() {
  const [notes, setNotes] = useState([]);

  function addNote(inputNote) {
    if (inputNote.title !== "" && inputNote.content !== "") {
      setNotes((prevNote) => {
        return [
          ...prevNote,
          {
            id: inputNote.key,
            title: inputNote.title,
            content: inputNote.content,
          },
        ];
      });
    }
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      // Filter through an "notes" array to get rid of the one that match with "id"
      return prevNote.filter(
        // Loop through each note in previous "notes" array and get the "index" of each note
        (note) => {
          // Return only note that index "not match" with the id (the note that "match" the id is equal to got delete)
          return note.id !== id;
        }
      );
    });
  }

  return (
    <>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </>
  );
}

export default NoteScreen;
