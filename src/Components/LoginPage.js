import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const history = useHistory();

  const [formValues, setFormVales] = useState(initialValues);
  const [error, setError] = useState(null);
  const handleChanges = (e) => {
    setError(null);
    setFormVales({ ...formValues, [e.target.name]: e.target.value });
  };

  {
    /*} const handleChange = (e) => {
    console.log(e);
  };*/
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ft-water-my-plants-1.herokuapp.com/api/auth/login",
        formValues
      )
      .then((res) => {
        window.localStorage.setItem("token", res.data.data);
        history.push("/PlantList");
      })
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <div>
      <ComponentContainer>
        <ModalContainer>
          <h1>Welcome to Water Plants</h1>
          <h2>Please enter your account information.</h2>
        </ModalContainer>
      </ComponentContainer>
      <div data-testid="loginForm" className="login-form">
        {error ? (
          <p id="error" className="error">
            {error}
          </p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChanges}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChanges}
          />
          <button id="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

const ComponentContainer = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ModalContainer = styled.div`
  width: 500px;
  background: white;
  padding: 2rem;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.5rem;
`;

const FormGroup = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
`;

const Button = styled.button`
  padding: 1rem;
  width: 100%;
`;
