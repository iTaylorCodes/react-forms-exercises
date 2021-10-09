import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const colorInput = boxList.getByLabelText("Color");
  fireEvent.change(colorInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add Box");
  fireEvent.click(button);
}

it("should render without crashing", () => {
  render(<BoxList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment).toMatchSnapshot();
});

it("should add a new box", () => {
  const boxList = render(<BoxList />);

  // expect no boxes yet
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);

  // expect a box
  const box = boxList.getByText("X");
  expect(box).toBeInTheDocument();
  expect(box).toHaveStyle(`
  width: 2em;
  height: 2em;
  background-color: peachpuff;
  `);

  // expect form to be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("should remove a box", () => {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeBtn = boxList.getByText("X");

  // click the X on the box to remove the box
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
