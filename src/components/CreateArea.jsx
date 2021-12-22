import React, { useState } from "react";

function CreateArea(props) {
    const [inputNote, setInputNote] = useState({
        key: "",
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { value, name } = event.target;

        setInputNote(prevNote => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevNote.content
                }
            } else if (name === "content") {
                return {
                    title: prevNote.title,
                    content: value
                }
            }
        });
    }

    function submitNote(event) {
        event.preventDefault();
        props.onAdd(inputNote);
        setInputNote({
            key: "",
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    value={inputNote.title}
                    name="title"
                    placeholder="Title"
                />
                <textarea
                    onChange={handleChange}
                    value={inputNote.content}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNote}> Add </button>
            </form>
        </div>
    );
}

export default CreateArea;