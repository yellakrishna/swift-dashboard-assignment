import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashhboard";
import Profile from "./components/profile/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

