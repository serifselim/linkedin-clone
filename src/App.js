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

    if (usersList) dispatch({ type: actionTypes.GET_ALL_USERS, users: usersList });
    if (currentUser) {
      dispatch({ type: actionTypes.GET_USER, user: currentUser });
      console.log(currentUser)
      console.log('current user geldi');
    };

  }, [])

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={state.currentUser ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App