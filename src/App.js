import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import { Cards } from "./components/cards/ListCards";

import "./style.css";
import { SearchPoke } from "./components/search/SearchPoke";

const App = () => {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);

  const current = useFetch(url);
  const { loading, data } = current;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokemon page</h1>
      <SearchPoke />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Cards results={data.results} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => setUrl(data.previous)}
              className="m-2 btn btn-dark"
            >
              Back
            </button>
            <button
              onClick={() => setUrl(data.next)}
              className="m-2 btn btn-dark"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
