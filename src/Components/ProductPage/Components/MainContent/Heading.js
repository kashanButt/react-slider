import React from "react";
import { GoLocation } from "react-icons/go";

const Heading = () => {
  return (
    <div className="heading">
      <h2>Nissan Clipper DX 2013</h2>
      <p className="location">
        <GoLocation className="locationIcon" />
        I-10,Islamabad
      </p>
    </div>
  );
};

export default Heading;
