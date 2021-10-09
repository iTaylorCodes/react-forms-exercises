import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const addTodo = (todoList, task = "Grocery Shopping") => {
  const taskInput = todoList.getByLabelText("Task");
  fireEvent.change(taskInput, { target: { value: task } });
  const button = todoList.getByText("Add Task");
  fireEvent.click(button);
};

it("should render without crashing", () => {
  render(<TodoList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment).toMatchSnapshot();
});

it("should add a new task", () => {
  const todoList = render(<TodoList />);

  // expect no tasks yest
  expect(todoList.queryByText("Grocery Shopping")).not.toBeInTheDocument();

  addTodo(todoList);

  // expect a task now
  const task = todoList.queryByText("Grocery Shopping");
  expect(task).toBeInTheDocument();

  // expect form to be empty
  expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
});

it("should remove a task", () => {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  const removeBtn = todoList.getByText("Remove");

  // click the X on the box to remove the box
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
