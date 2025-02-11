import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    alert(`Submitted Name : ${name}`);
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
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email id :
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        phone no :
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <button type="submit"> Submit </button>
    </form>
  );
}
export default UserForm;
