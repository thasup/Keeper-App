import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
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

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded &&
                    <input
                        onChange={handleChange}
                        value={inputNote.title}
                        name="title"
                        placeholder="Title"
                    />
                }
                <textarea
                    onClick={expand}
                    onChange={handleChange}
                    value={inputNote.content}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded} style={{ transitionDelay: true ? '300ms' : '0ms' }}>
                    <Fab color="primary" aria-label="add" onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;