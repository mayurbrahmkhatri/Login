import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  let history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const chageHandle = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const loginUser = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:9000/login", user).then((res) => {
        console.log(res);
        setLoginUser(res.data.user);
        // <Link to="/"></Link>;
        history("/");
        alert(`${res.data.message}`);

        // alert(`Welcome ${res.data.user.name}`);
      });
    } else {
      alert(`inValid`);
    }
  };
  return (
    <div className="d-flex justify-content-center text-center ">
      <div className="border p-5 pt-4 rounded">
        <div className="p-5">
          <h1 className="h3 mb-4">Login Page</h1>
          <input
            className="ps-2 mb-3 rounded border-bottom"
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={chageHandle}
            placeholder="Enter Your Username..."
          />
          <br />
          <input
            className="ps-2 mb-2 rounded border-bottom"
            name="password"
            type="password"
            id="password"
            value={user.password}
            onChange={chageHandle}
            placeholder="Enter Your Password..."
          />
          <br />
          <button
            className="btn btn-primary mt-2 p-4 pt-2 pb-2"
            onClick={loginUser}
          >
            Login
          </button>
          <hr />
          <Link to="/registraion">
            <button className="btn btn-primary mt-2 p-3 pt-2 pb-2">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
