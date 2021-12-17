import React, { useState } from "react";

import "../App.css";

const NewNoteForm = ({ onSaveNewNote, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNote, setEnteredNote] = useState("");

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

    const newNote = {
      id: Math.random().toString(),
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

    onSaveNewNote(newNote);
    setEnteredTitle("");
    setEnteredNote("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div>
        <label>Enter Note:</label>
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

export default NewNoteForm;
