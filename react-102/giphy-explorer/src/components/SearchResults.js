import React from "react";

import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
  return (
    <div className={classes["search-results"]}>
      {props.giphys.map((giphy) => (
        <img
          key={giphy.id}
          src={`https://i.giphy.com/media/${giphy.id}/100.gif`}
        />
      ))}
    </div>
  );
};

export default SearchResults;
