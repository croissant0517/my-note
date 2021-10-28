import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";

import "./createArea.scss"

function CreateArea(props) {
    const [isExpand, setIsExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        event.preventDefault();
        if (note.title.length > 0 && note.content.length > 0 ) {
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
        } else {
            return
        }   
    }

    function expand() {
        setIsExpand(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpand ? (
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Enter a title"
                />
                ) : null}
                <textarea
                    onClick={expand}
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpand ? "12" : "1"}
                />
                <Zoom in={isExpand}>
                    <button onClick={submitNote}>Add</button>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
