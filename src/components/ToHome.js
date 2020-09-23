import React from "react";
import { Link } from "react-router-dom";

const ToHome = () => {
  return (
    <Link to="/">
      <div className="ToHome">
        <div className="Text">
          <h1>MUSIC-DB</h1>
        </div>
      </div>
    </Link>
  );
};

export default ToHome;
