// SignUpPage.js
import React, { useState } from "react";
import "./signinpage.css";

const SigninPage = () => {
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data

    // Submit the form data to a server

    // Redirect the user to the home page
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        /> 
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SigninPage;
