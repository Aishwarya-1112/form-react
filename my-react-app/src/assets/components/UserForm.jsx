import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [lname, setLame] = useState("");
  const [ph, setPh] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setLame(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name :
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Lastame :
        <input
          type="text"
          value={lname}
          onChange={handleChange}
        />
      </label>
      <label>
        Email id :
        <input
          type="text"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        phone no :
        <input
          type="text"
          value={ph}
          onChange={handleChange}
        />
      </label>
      <button type="submit"> Submit </button>
    </form>
  );
}
export default UserForm;
