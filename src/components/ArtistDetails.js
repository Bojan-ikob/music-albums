import React, { Component } from "react";
import Albums from "./Albums";
import artists from "../data/db";

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const artist = artists.find(el => el.id == this.props.match.params.id);
    return (
      <div className="ArtistDetails">
        <img src={require(`../data/images/covers/${artist.cover}.jpg`)} />
        <p>{artist.name}</p>
        <p>{artist.bio}</p>
        <div className="all-albums">
          {artist.albums.map(el => (
            <Albums item={el.cover} key={el.albumId} />
          ))}
        </div>
      </div>
    );
  }
}

export default ArtistDetails;
