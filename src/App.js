import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import CreateArea from "./components/createArea/createArea";
import Time from "./components/time/time";

import "./App.css"

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(Note) {
    let newNote = {...Note, time:new Date().toLocaleTimeString()}
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    window.localStorage.setItem("notes", JSON.stringify([...notes, newNote]))
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    window.localStorage.setItem("notes", JSON.stringify(notes.filter((noteItem, index) => {
      return index !== id;
    })))
  }

  useEffect(() => {
    const notesPersister = JSON.parse(window.localStorage.getItem("notes") || "[]");
    setNotes(notesPersister)
  }, [])

  return (
    <div>
      <Header />
      <Time />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            time={noteItem.time}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;