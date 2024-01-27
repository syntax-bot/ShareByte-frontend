/** @jsxImportSource @emotion/react  */

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Feed from "./Screens/Feed/Home";
import Profile from "./Screens/Feed/Profile";
import { useLoader } from "./Contexts/LoaderContext";
import { LoginProvider } from "./Contexts/LoginContext";
import DynamicProfile from "./Screens/Feed/DynamicProfile";
import FoodMap from "./Screens/Feed/FoodMap";
import HomePage from "./Screens/HomePage/HomePage";
import SignupPage from "./Screens/SignupPage/SignupPage";
import SigninPage from "./Screens/SigninPage/SigninPage";
import AboutPage from "./Screens/AboutPage/AboutPage";

// import { UserEnum } from "./constants";

export default function App() {
  // const [loggedinAs, setLoggedinAs] = useState(UserEnum.INVALID);
  let [loggedIn, setLoggedIn] = useState(localStorage.getItem("auth") || false);

  const [loading, setLoading] = useLoader();

  useEffect(() => {
    // emulate delay to check if user is logged in
    // we will check from cookie
    console.warn("Loader From App.jsx");
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path={"/"}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Dashboard page should be done by harsh */}
          {/* <Route path="/profile" element={<DashboardPage />} /> */}
        </Route>

        <Route path={"/feed"} element={
          <LoginProvider>
            <Layout />
          </LoginProvider>
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
