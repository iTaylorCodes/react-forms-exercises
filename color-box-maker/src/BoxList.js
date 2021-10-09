import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  const handleRemove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="BoxList">
      <h2>Box List</h2>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({ id, color, width, height }) => {
        return (
          <Box
            id={id}
            color={color}
            width={width}
            height={height}
            key={id}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};

export default BoxList;
