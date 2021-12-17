import React, { useState } from "react";

import "../App.css";

const EditNoteForm = ({
  activeNote,
  onSaveEditNote,
  onCancel,
  deleteNoteHandler,
}) => {
  const [enteredTitle, setEnteredTitle] = useState(activeNote.title.toString());
  const [enteredNote, setEnteredNote] = useState(activeNote.note.toString());

  let today = new Date();

  const setHour = () => {
    let hours = today.getHours();
    let minutes = (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    let AmOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const finalHour = hours + ":" + minutes + AmOrPm;
    return finalHour;
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const noteChangeHandler = (event) => {
    setEnteredNote(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const editedNote = {
      id: activeNote.id,
      title: enteredTitle,
      hour: setHour(),
      date:
        today.getMonth() +
        "/" +
        today.getDate() +
        "/" +
        today.getFullYear().toString().substr(-2),
      note: enteredNote,
    };

    deleteNoteHandler(activeNote);
    onSaveEditNote(editedNote);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Edit Title:</label>
        <br />
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div>
        <label>Edit Note:</label>
        <br />
        <textarea
          type="text"
          value={enteredNote}
          onChange={noteChangeHandler}
        ></textarea>
      </div>
      <div>
        <br />
        <button type="submit" className="button tertiary header-text">
          Submit
        </button>
        &nbsp;
        <button
          type="button"
          className="button tertiary header-text"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditNoteForm;
