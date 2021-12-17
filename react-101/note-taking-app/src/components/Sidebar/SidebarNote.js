import React from "react";

import "../../App.css";

const SidebarNote = ({ title, hour, date, active, note, onClick }) => {
  return (
    <li onClick={() => onClick(note)} className={active ? "active" : ""}>
      <h3 className="header-text no-margin">{title}</h3>
      <p className="body-text no-margin muted">
        Last Updated: {hour} {date}
      </p>
    </li>
  );
};

export default SidebarNote;
