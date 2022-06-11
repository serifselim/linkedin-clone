/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import GlobalStyle from './globalStyle';
import { getData, setData } from './app/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, getUser } from './features/user/userSlice';
import { getPosts } from './features/post/postSlice';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './constants/themeSettings';

const App = () => {

  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(lightTheme);

  const checkData = (data, func) => data !== {} && dispatch(func(data));
  const changeTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
      setData('theme', 'light');
    } else {
      setTheme(darkTheme);
      setData('theme', 'dark');
    }
  };

  useEffect(() => {
    const theme = getData('theme');

    // Check States Firstly
    checkData(getData('usersList'), getAllUser);
    checkData(getData('currentUser'), getUser);
    checkData(getData('postsList'), getPosts);

    // Get Current Theme
    if (theme) {
      theme === 'light' && setTheme(lightTheme);
      theme === 'dark' && setTheme(darkTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            currentUser ?
              <Home theme={theme} changeTheme={changeTheme} />
              :
              <Login theme={theme} changeTheme={changeTheme}
              />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;