import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { Alert, CircularProgress, Fab, Zoom } from "@mui/material";
import { createNote } from "../actions/noteActions";

function CreateArea() {
  const dispatch = useDispatch();
  const [isExpanded, setExpanded] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  const createNoteState = useSelector((state) => state.createNoteState);
  const {
    loading: loadingCreateNote,
    success: successCreateNote,
    error: errorCreateNote,
  } = createNoteState;

  useEffect(() => {
    setIsShow(true);

    setTimeout(() => {
      setIsShow(false);
    }, 3000);
  }, [loadingCreateNote, successCreateNote, errorCreateNote]);

  function handleChange(event) {
    const { value, name } = event.target;

    setInputNote((prevNote) => {
      if (name === "title") {
        return {
          title: value,
          content: prevNote.content,
        };
      } else if (name === "content") {
        return {
          title: prevNote.title,
          content: value,
        };
      }
    });
  }

  function submitNote(event) {
    event.preventDefault();

    setInputNote({
      title: "",
      content: "",
    });

    dispatch(createNote(inputNote));
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      {successCreateNote && isShow && (
        <Alert
          severity="success"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Successfully added note!
        </Alert>
      )}
      {errorCreateNote && isShow && (
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
      {loadingCreateNote ? (
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
        <form className="create-note">
          {isExpanded && (
            <input
              onChange={handleChange}
              value={inputNote.title}
              name="title"
              placeholder="Title"
            />
          )}
          <textarea
            onClick={expand}
            onChange={handleChange}
            value={inputNote.content}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
          <Zoom
            in={isExpanded}
            style={{ transitionDelay: true ? "300ms" : "0ms" }}
          >
            <Fab color="primary" aria-label="add" onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      )}
    </div>
  );
}

export default CreateArea;
