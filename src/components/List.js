import React from "react";
import SearchArtist from "./SearchArtist";
import artists from "../data/db";

const List = () => {
  return (
    <div className="List">
      <h1>Browse the artists</h1>
      {artists.map(el => (
        <SearchArtist image={el.cover} name={el.name} id={el.id} key={el.id} />
      ))}
    </div>
  );
};

export default List;
