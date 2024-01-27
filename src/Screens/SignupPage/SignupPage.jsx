// SignUpPage.js
import React, { useState } from "react";
import "./signuppage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState(null);
  const [bio, setBio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data

    // Submit the form data to a server

    // Redirect the user to the home page
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
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
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setPhoto(event.target.files[0])}
        />
        <textarea
          value={bio}
          onChange={setBio}
          placeholder="Write a short bio..."
          rows="4" // You can adjust the number of visible rows
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupPage;
