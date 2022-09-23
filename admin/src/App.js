import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./style/dark.scss";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {admin && (
          <>
            <Route path="/home" element={<Home />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
