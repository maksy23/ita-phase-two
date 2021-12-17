import React from "react";

import SidebarNote from "./SidebarNote";
import "../../App.css";

const Sidebar = ({ notes, activeNote, onSetNoteId, onSetWritingNote }) => {
  return (
    <aside className="sidebar">
      <button
        type="button"
        className="button block tertiary header-text"
        onClick={onSetWritingNote}
      >
        Create Note
      </button>
      <ul>
        {notes.map((note) => (
          <SidebarNote
            key={note.id}
            title={note.title}
            hour={note.hour}
            date={note.date}
            active={activeNote && note.id === activeNote.id}
            note={note}
            onClick={onSetNoteId}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
