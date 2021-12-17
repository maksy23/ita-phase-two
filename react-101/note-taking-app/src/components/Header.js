import React from "react";

import "../App.css";

const Header = ({ lastUpdate, editActiveNoteHandler, deleteNoteHandler }) => {
  return (
    <header>
      <p className="body-text no-margin muted">Last Updated: {lastUpdate}</p>
      <div className="button-group">
        <button
          onClick={editActiveNoteHandler}
          type="button"
          className="button primary header-text"
        >
          Edit Note
        </button>
        <button
          onClick={deleteNoteHandler}
          type="button"
          className="button secondary header-text"
        >
          Delete Note
        </button>
      </div>
    </header>
  );
};

export default Header;
