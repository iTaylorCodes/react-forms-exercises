import React from "react";
import "./Box.css";

const Box = ({ id, color = "blue", width = 5, height = 5, handleRemove }) => {
  return (
    <div
      className="Box"
      style={{
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor: color,
      }}
      onClick={() => handleRemove(id)}
    >
      X
    </div>
  );
};

export default Box;
