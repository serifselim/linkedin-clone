/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import GlobalStyle from './globalStyle';
import { getData } from './app/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, getUser } from './features/user/userSlice';
import { getPosts } from './features/post/postSlice';

const App = () => {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const checkData = (data, func) => data && dispatch(func(data));

  useEffect(() => {
    checkData(getData('usersList'), getAllUser);
    checkData(getData('currentUser'), getUser);
    checkData(getData('postsList'), getPosts);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={currentUser ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;