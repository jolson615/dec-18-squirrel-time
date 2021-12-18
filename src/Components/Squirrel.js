import React from "react";

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>
        {props.sdata.age} {props.sdata.primary_fur_color}
      </h3>
    </div>
  );
}

export default Squirrel;
