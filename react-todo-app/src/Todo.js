import React from "react";

const Todo = ({ id, task, handleRemove }) => {
  return (
    <div className="Todo">
      {task}
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};

export default Todo;
