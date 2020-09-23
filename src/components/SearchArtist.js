import React from "react";
import { Link } from "react-router-dom";

const SearchArtist = props => {
  return (
    <Link to={`/artist/${props.id}`}>
      <div className="SearchArtist">
        <img src={require(`../data/images/covers/${props.image}.jpg`)} />
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

export default SearchArtist;
