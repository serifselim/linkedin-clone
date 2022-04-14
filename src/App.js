import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import GlobalStyle from './globalStyle';
import Provider, { useStateValue } from './context/Provider';

const App = () => {
  const { state, dispatch } = useStateValue();

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