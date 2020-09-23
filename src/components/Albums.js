import React from "react";

const Albums = props => {
  return (
    <div className="Albums">
      <img src={require(`../data/images/albums/${props.item}.jpg`)} />
    </div>
  );
};

export default Albums;
