import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can recieve a user and display it on the list", () => {
  render(<App />);

  //Find two input fields
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /enter email/i });
  const button = screen.getByRole("button");
  user.click(nameInput);
  user.keyboard("Jane");
  user.click(emailInput);
  user.keyboard("jane@gmail.com");
  user.click(button);

  const name = screen.getByRole("cell", { name: "Jane" });
  const email = screen.getByRole("cell", { name: "jane@gmail.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
