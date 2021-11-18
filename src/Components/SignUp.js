import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as yup from "yup";
import axios from "axios";

function SignUp() {
  const handleChange = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <center>
        <h1>Create Account</h1>
        <form>
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
          <button>Create Account</button>
        </form>
      </center>
    </div>
  );
}

export default SignUp;
