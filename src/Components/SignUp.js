import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as yup from "yup";
import axios from "axios";

function SignUp() {
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
    phoneNumber: "",
  };

  const [formValues, setFormVales] = useState(initialValues);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setError(null);
    setFormVales({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ft-water-my-plants-1.herokuapp.com/api/auth/register",
        formValues
      )
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        history.push("/LoginPage");
      })
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <div>
      <center>
        <h1>Create Account</h1>
        {error ? (
          <p id="error" className="error">
            {error}
          </p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phonenumber"
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </label>
          <button id="submit">Create Account</button>
        </form>
      </center>
    </div>
  );
}

export default SignUp;
