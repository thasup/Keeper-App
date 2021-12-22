import React from "react";

function Note(props) {
    function handleDelete(event) {
        event.preventDefault();
        props.onDelete(props.id);
    }

    return (
        <div className="note" id={props.id}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
};

export default Note;