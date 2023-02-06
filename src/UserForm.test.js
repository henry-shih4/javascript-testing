import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./components/UserForm";

test("shows two inputs and a button", () => {
  //render component
  render(<UserForm />);
  //manipulate component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  //assertion -make sure component does what we need it to do.

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("calls on addUser when form is submitted", () => {
  const mock = jest.fn();

  //try to render component
  render(<UserForm addUser={mock} />);

  //find two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /enter email/i });

  //simulate typing in name
  user.click(nameInput);
  user.keyboard("John");

  //simulate typing in email
  user.click(emailInput);
  user.keyboard("john99@gmail.com");

  //find button
  const button = screen.getByRole("button");

  //simulate clicking button
  user.click(button);

  //assertion to make sure addUser gets called with name/email
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "John",
    email: "john99@gmail.com",
  });
});

test("empty fields after submitting form", () => {
  //try to render component
  render(<UserForm addUser={() => {}} />);
  //find two inputs and button
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /enter email/i });
 const button = screen.getByRole("button");

  //simulate typing in name
  user.click(nameInput);
  user.keyboard("John");

  //simulate typing in email
  user.click(emailInput);
  user.keyboard("john99@gmail.com");
  //simulate clicking submit button
  user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
