/** @jsxImportSource @emotion/react  */

import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Feed from "./Screens/Feed/Home";
import Profile from "./Screens/Feed/Profile";
import { useLoader } from "./Contexts/LoaderContext";
import DynamicProfile from "./Screens/Feed/DynamicProfile";
import FoodMap from "./Screens/Feed/FoodMap";
import HomePage from "./Screens/HomePage/HomePage";
import SignupPage from "./Screens/SignupPage/SignupPage";
import SigninPage from "./Screens/SigninPage/SigninPage";
import AboutPage from "./Screens/AboutPage/AboutPage";
import { SnackbarProvider } from "notistack";
import { useLogin } from "./Contexts/LoginContext";
import { api_glue } from "./constants";
import LoginAutoRouter from "./LoginAutoRouter";

// import { UserEnum } from "./constants";

export default function App() {

  const [loading, setLoading] = useLoader();
  const [loginData, setLoginData] = useLogin();

  useEffect(() => {
    api_glue.check_login() // handles by fetching from stored publlic cookie
      .then(login => {
        if (login) { // if user is logged in we set loginData
          setLoginData(login);
        } else {
          setLoginData(null);
        }
      })
      .catch(err => {
        setLoginData(null);
        console.log('app.jsx', err);
      })
      .finally(e => {
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route path={"/"} element={<LoginAutoRouter />}>
          <Route index path="/" element={<HomePage />} />

          <Route path="/signup" element={
            <SnackbarProvider>
              <SignupPage />
            </SnackbarProvider>
          }
          />

          <Route path="/signin" element={
            <SnackbarProvider>
              <SigninPage />
            </SnackbarProvider>
          } />

          <Route path="/about" element={<AboutPage />} />

          {/* Dashboard page should be done by harsh */}
          {/* <Route path="/profile" element={<DashboardPage />} /> */}
        </Route>

        <Route path={"/feed"} element={
          <Layout />
        }>
          <Route index element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:id" element={<DynamicProfile />} />
          <Route path="map" element={<FoodMap />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
