import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";

import "./createArea.scss"

function CreateArea(props) {

    const [isExpand, setIsExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    console.log(note);

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
            setNote({
                title: "",
                content: "",
            });
            props.onAdd(note);
        } else {
            return
        }   
    }

    function expand() {
        setIsExpand(true);
    }

    function unExpand() {
        setIsExpand(false);
    }

    return (
        <div className="create-note-contaner">
            <form className="create-note" onMouseEnter={expand} onMouseLeave={unExpand} >
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Enter a title"
                />
                {isExpand ? (
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpand ? "12" : "1"}
                />
                ) : null}
                <Zoom in={isExpand}>
                    <button onClick={submitNote}>Add</button>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
