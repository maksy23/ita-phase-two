import React, { useState } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  const [enteredSearch, serEnteredSearch] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");

  const userInputChangeHandler = (event) => {
    serEnteredSearch(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    const searchRequest = {
      name: enteredSearch.trim(),
      quantity: enteredQuantity,
    };

    props.onSearch(searchRequest);
    serEnteredSearch("");
    setEnteredQuantity("");
  };

  return (
    <div className={classes.header}>
      <form onSubmit={searchHandler}>
        <label htmlFor="userInput">
          <span id={classes.green}>G</span>
          <span id={classes.yellow}>I</span>
          <span id={classes.red}>P</span>
          <span id={classes.purple}>H</span>
          <span id={classes.blue}>Y</span>
        </label>
        <input
          id="userInput"
          type="text"
          placeholder="Search all the GIFs you want..."
          value={enteredSearch}
          onChange={userInputChangeHandler}
          required
        />
        <label htmlFor="searchQuantity">How many do you need?</label>
        <select
          id="searchQuantity"
          value={enteredQuantity}
          onChange={quantityChangeHandler}
          required
        >
          <option></option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
