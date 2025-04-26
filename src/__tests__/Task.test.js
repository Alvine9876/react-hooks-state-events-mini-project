import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

// test("is removed from the list when the delete button is clicked", () => {
//   render(<App />);
//   const task = screen.queryByText(/Buy rice/);
//   const deleteButton = task.parentElement.querySelector("button");

//   fireEvent.click(deleteButton);

//   expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
// });

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const task = screen.queryByText(/Buy rice/);
  expect(task).toBeInTheDocument(); // make sure the task is there before delete

  // Find the delete button using a better method
  const deleteButton = task?.closest(".task")?.querySelector("button");
  expect(deleteButton).toBeInTheDocument(); // make sure we found the button

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
