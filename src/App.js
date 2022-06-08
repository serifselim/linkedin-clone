/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import GlobalStyle from './globalStyle';
import { useStateValue } from './context/Provider';
import { actionTypes } from './context/reducer';
import { getData } from './context/utils';

const App = () => {
  const { state, dispatch } = useStateValue();

  useEffect(() => {
    const usersList = getData('usersList');
    const currentUser = getData('currentUser');
    const postsList = getData('postsList');

    if (usersList) {
      dispatch({ type: actionTypes.GET_ALL_USERS, users: usersList });
    };
    if (currentUser) {
      dispatch({ type: actionTypes.GET_USER, user: currentUser });
    };
    if (postsList) {
      dispatch({ type: actionTypes.GET_POSTS, postsList });
    }

  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={state.currentUser ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;