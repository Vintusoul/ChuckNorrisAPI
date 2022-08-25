import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = (): JSX.Element => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    getChuckFact();
  }, []);

  const getChuckFact = async () => {
    let ENDPOINT = "https://api.chucknorris.io/jokes/random";
    try {
      const getTitle = await axios(ENDPOINT);
      setFact(getTitle.data.value);
      console.log(JSON.stringify(getTitle.data.value));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <p>Chuck Norris API</p>
      <p>{fact}</p>
    </div>
  );
};

export default App;
