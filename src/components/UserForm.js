import { useState } from "react";

export default function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addUser } = props;

  function handleFormSubmit(e) {
    e.preventDefault();
    addUser({ name: name, email: email });
    setName("");
    setEmail("");
  }

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <h2>Add a user</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
