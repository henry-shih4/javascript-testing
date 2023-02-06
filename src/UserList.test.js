import { render, screen} from "@testing-library/react";

import UserList from "./components/UserList";

function renderComponent() {
  const users = [
    { name: "John", email: "john99@gmail.com" },
    { name: "Sam", email: "sam15@yahoo.com" },
  ];
  render(<UserList users={users} />);
  return { users };
}

test("render one row per user", () => {
  //render the component
  const users = [
    { name: "John", email: "john99@gmail.com" },
    { name: "Sam", email: "sam15@yahoo.com" },
  ];
  const { container } = render(<UserList users={users} />);

  //Find all rows in the table
  const rows = container.querySelectorAll("tbody tr");

  //assertion: correct number of rows in table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
