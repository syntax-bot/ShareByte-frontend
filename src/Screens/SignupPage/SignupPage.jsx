// SignUpPage.js
import React, { useState } from "react";
import "./signuppage.css";
import { Avatar, InputLabel } from "@mui/material";
import { CameraAlt, Circle, Image, Photo } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { api_glue, error_report_message, report_bugs_to } from "../../constants";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState(null);
  // const [bio, setBio] = useState("");

  const snackbar = useSnackbar();
  const navigate = useNavigate();


  const handleFormData = (formData) => {
    api_glue.create_user(formData).then(res => {
      if (res.status == 'success') {
        snackbar.enqueueSnackbar({ message: 'User Created Successfully', variant: 'success' })
        // Redirect the user to the home page
        navigate('/signin');
      } else {
        snackbar.enqueueSnackbar({ message: res.data.message, variant: res.status })
      }
    }).catch(err => {
      console.log(err);
      snackbar.enqueueSnackbar({ message: error_report_message, variant: 'error' })
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    if (name.trim().length <= 2) {
      snackbar.enqueueSnackbar({ message: 'Name Not Valid', variant: 'error' });
      return;
    }

    if (password.trim().length <= 2) {
      snackbar.enqueueSnackbar({ message: 'Password too weak', variant: 'error' });
      return;
    }

    if (phoneNumber.trim().replace('0', '').length != 10) {
      snackbar.enqueueSnackbar({ message: 'Phone Number Not Valid', variant: 'error' });
      return;
    }
    // Submit the form data to a server

    const formData = new FormData(event.target);

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        formData.append('location_lat', coords.latitude);
        formData.append('location_long', coords.longitude);
        handleFormData(formData);
      },
      () => {
        handleFormData(formData);
      })


  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <InputLabel>
          {
            photo ?
              <Avatar src={URL.createObjectURL(photo)} className="m-auto" sx={{ width: 100, height: 100 }} />
              :
              <CameraAlt sx={{ width: 100, height: 100 }} />
          }

          <input
            name="profile_pic"
            className="hidden"
            type="file"
            accept="image/*"
            multiple={false}
            onChange={(event) => setPhoto(event.target.files[0])}
          />

        </InputLabel>

        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {/* <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        /> */}
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(event) => {
            const no = event.target.value;
            if (no.slice(0, 1) != '0') setPhoneNumber('0' + no)
            else setPhoneNumber(no);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <textarea
          name="bio"
          placeholder="Write a short bio..."
          rows="4" // You can adjust the number of visible rows
        />
        <button type="submit">Sign up</button>
        <p>Already a user? <a href="/signin">Sign in</a></p>
      </form>
    </div>
  );
};

export default SignupPage;
