import React, { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const getData = async () => {
    const res = await axios.get("https://swapi.dev/api/people/");
    setOurData(res.data);
  };

  const [ourData, setOurData] = useState({ results: [] });

  useEffect(() => {
    console.log("Running use effect");
    getData();
  });

  return (
    <div>
      <h1>Star Wars</h1>
      {ourData.results.length > 0 ? (
        ourData.results.map((character: any) => {
          return <p>{character.name}</p>;
        })
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
};

export default Characters;
