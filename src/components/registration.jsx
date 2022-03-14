import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Registration = (props) => {
  let history = useNavigate();
  let type = "password";
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const showPassword = () => {
    if (type === "password") {
      type = "text";
    } else {
      type = "password";
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target; //event will target the whole tag and after that we are using the name and value attributes from the tag.
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, cpassword } = user;
    if (name && email && password && password === cpassword) {
      axios.post("http://localhost:9000/register", user).then((res) => {
        // <Link to="/"></Link>;
        history("/login");
        alert(res.data.message);
        // console.log(res);
      });
    } else {
      alert(`inValid`);
    }
  };
  return (
    <div className="d-flex justify-content-center text-center ">
      <div className="border p-5 rounded">
        <div className="p-5">
          <h1 className="h3 mb-4">Registraion Page</h1>
          <input
            className="ps-2 mb-3 rounded border-bottom"
            type="text"
            name="name"
            value={user.name}
            id="name"
            onChange={handleChange}
            placeholder="Enter Name..."
            required
          />
          <br />
          <input
            className="ps-2 mb-3 rounded border-bottom"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter Username..."
            required
          />
          <br />
          <input
            className="ps-2 mb-3 rounded border-bottom"
            name="password"
            value={user.password}
            onChange={handleChange}
            type={type}
            id="password"
            placeholder="Enter Password..."
            required
          />
          <br />
          <input
            className="ps-2 mb-2 rounded border-bottom"
            name="cpassword"
            value={user.cpassword}
            onChange={handleChange}
            type={type}
            id="cpassword"
            placeholder="Confirm Password..."
            required
          />
          <div>
            <input
              className=""
              type="checkbox"
              id="shpass"
              onClick={showPassword}
            />
            <label htmlFor="shpass"> Show Password</label>
          </div>
          <br />
          <button
            className="btn btn-primary mt-2 p-5 pt-2 pb-2"
            onClick={register}
          >
            Register
          </button>
          <hr />
          <Link to="/login">
            <button className="btn btn-primary mt-2 p-5 pt-2 pb-2">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
