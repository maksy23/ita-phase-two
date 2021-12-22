import React, { useState, useEffect, Fragment } from "react";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
  const [request, setRequest] = useState(null);
  const [giphys, setGiphys] = useState(null);
  const apiKey = "71X1iQm7EX2umSUa6RJk8YpA9Hb94Xof";

  useEffect(() => {
    if (request !== null) {
      (async () => {
        const name = request.name;
        const quantity = request.quantity;

        const res = await fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=" +
            apiKey +
            "&q=" +
            name +
            "&limit=" +
            quantity +
            "&offset=0&rating=g&lang=en"
        );
        const data = await res.json();

        setGiphys(data.data);
      })();
    } else {
      return null;
    }
  }, [request]);

  const searchInputHandler = (req) => {
    setRequest(req);
  };

  return (
    <Fragment>
      <Header onSearch={searchInputHandler} />
      {giphys === null ? null : <SearchResults giphys={giphys} />}
    </Fragment>
  );
}

export default App;
