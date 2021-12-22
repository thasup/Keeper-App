import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Note(props) {
    function handleDelete(event) {
        event.preventDefault();
        props.onDelete(props.id);
    }

    return (
        <div className="note" id={props.id}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </button>
        </div>
    );
};

export default Note;