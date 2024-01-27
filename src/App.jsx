/** @jsxImportSource @emotion/react  */

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Layout from "./Layout";
import MainHome from "./Screens/MainHome/Home";
import Feed from "./Screens/Feed/Home";
import Dashboard from "./Screens/Feed/Profile";
import { useLoader } from "./Contexts/LoaderContext";
import { useTheme } from "./Contexts/ThemeContext";
import About from "./Screens/MainHome/About";
import NavBar from "./components/Navbars/NavBar";
// import { UserEnum } from "./constants";

export default function App() {
  // const [loggedinAs, setLoggedinAs] = useState(UserEnum.INVALID);
  let [loggedIn, setLoggedIn] = useState(localStorage.getItem("auth") || false);

  const [loading, setLoading] = useLoader();
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    // emulate delay to check if user is logged in
    // we will check from cookie
    console.warn("Loader From App.jsx");
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    // MuiThemeProvider
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: theme,
        },
      })}
    >
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path={"/"}>
              <Route
                index
                element={
                  <>
                    <NavBar />
                    <MainHome />
                  </>
                }
              />
              <Route
                path="about"
                element={
                  <>
                    <NavBar />
                    <About />
                  </>
                }
              />
            </Route>

            <Route path={"/feed"} element={<Layout />}>
              <Route index element={<Feed />} />
              <Route path="profile" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}
