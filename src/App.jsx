/** @jsxImportSource @emotion/react  */

import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import Layout from "./Layout";
import MainHome from "./Screens/Home";
import FeederHome from "./Screens/Feeder/Home";
import HelperHome from "./Screens/Helper/Home";
import HungryHome from "./Screens/Hungry/Home";
import HungryProfile from "./Screens/Hungry/Profile";
import { useLoader } from "./Contexts/LoaderContext";
import { useTheme } from "./Contexts/ThemeContext";
// import { UserEnum } from "./constants";


export default function App() {

  // const [loggedinAs, setLoggedinAs] = useState(UserEnum.INVALID);
  const [loading, setLoading] = useLoader();
  const [theme,setTheme] = useTheme();

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
        }
      })}
    >
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<MainHome />} />

            <Route path={'/hungry'} element={<Layout />}>
              <Route index element={<HungryHome />} />
              <Route path="profile" element={<HungryProfile />} />

            </Route>


            <Route path={'/feeder'} element={<Layout />}>
              <Route index element={<FeederHome />} />

            </Route>


            <Route path={'/helper'} element={<Layout />}>
              <Route index element={<HelperHome />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}
