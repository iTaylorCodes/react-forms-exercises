import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = (id) => {
  const INITIAL_STATE = [];
  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTask = (newTask) => {
    setTodos((todos) => [...todos, { ...newTask, id: uuid() }]);
  };

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <NewTodoForm addTask={addTask} />
      <div id="list" className="TodoList-list">
        {todos.map(({ id, task }) => {
          return (
            <Todo id={id} task={task} key={id} handleRemove={handleRemove} />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
