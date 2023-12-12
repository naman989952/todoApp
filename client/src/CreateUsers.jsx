import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const newUser = { name, email, age };
    axios
      .post("http://127.0.0.1:3001/createUser", newUser)
      .then((result) => {
        navigate("/");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={submit}>
          <h3>Add New user</h3>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age || ""}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
