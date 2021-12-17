import React from "react";

import "../App.css";

const Note = ({ activeNote }) => {
  if (activeNote === undefined) {
    return <p>Please select the note..</p>;
  }

  return (
    <article>
      <h1 className="header-text">{activeNote.title}</h1>
      <p className="body-text">{activeNote.note}</p>
    </article>
  );
};

export default Note;
