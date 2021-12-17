import React, { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import Note from "./components/Note";
import NoteForm from "./components/NewNoteForm";
import EditNoteForm from "./components/EditNoteForm";
import "./App.css";

const defaultNotes = [
  {
    id: "0",
    title: "Eric Garcia",
    hour: "1:37PM",
    date: "7/26/19",
    note: "I already had Xavi’s rules at Manchester City with Pep Guardiola. I can see similarities between him, Pep, and Luis Enrique.",
  },
  {
    id: "1",
    title: "Frenkie de Jong",
    hour: "1:37PM",
    date: "7/26/19",
    note: "I'm back in Barcelona. And I'm sure that something special will develop here with Xavi",
  },
];

function App() {
  const [notes, setNewNote] = useState(defaultNotes);
  const [activeNote, setActiveNote] = useState();
  const [isWritingNote, setIsWritingNote] = useState(false);
  const [isEditingNote, setEditNote] = useState(false);
  const [lastUpdate, setLastUpdate] = useState("1:37PM 7/26/19");

  const setNoteId = (note) => {
    setActiveNote(note);
    setIsWritingNote(false);
    setEditNote(false);
  };

  const startWritingNote = () => {
    setIsWritingNote(true);
  };

  const saveNewNoteHandler = (newNote) => {
    setNewNote((prevNotes) => {
      return [newNote, ...prevNotes];
    });

    trackLastUpdate(newNote);
    setIsWritingNote(false);
    setEditNote(false);
  };

  const cancelCreateNewNoteForm = () => {
    setIsWritingNote(false);
  };

  const removeActiveNote = () => {
    const newArr = notes.filter((note) => {
      return note.id.toString() !== activeNote.id.toString();
    });

    setNewNote(newArr);
    setActiveNote();
  };

  const editActiveNote = () => {
    setEditNote(true);
  };

  const cancelEditNoteForm = () => {
    setEditNote(false);
  };

  const trackLastUpdate = (note) => {
    setLastUpdate(note.hour + " " + note.date);
  };

  return (
    <section className="layout">
      <Sidebar
        notes={notes}
        activeNote={activeNote}
        onSetNoteId={setNoteId}
        onSetWritingNote={startWritingNote}
      />
      <main>
        <Header
          lastUpdate={lastUpdate}
          editActiveNoteHandler={editActiveNote}
          deleteNoteHandler={removeActiveNote}
        />
        {!isWritingNote && <Note activeNote={activeNote} />}
        {isEditingNote && (
          <EditNoteForm
            activeNote={activeNote}
            onSaveEditNote={saveNewNoteHandler}
            deleteNoteHandler={removeActiveNote}
            onCancel={cancelEditNoteForm}
          />
        )}
        {isWritingNote && (
          <NoteForm
            onSaveNewNote={saveNewNoteHandler}
            onCancel={cancelCreateNewNoteForm}
          />
        )}
      </main>
    </section>
  );
}

export default App;
