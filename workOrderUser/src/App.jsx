import React from "react";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import UserDashboard from "./user_dashboard/UserDashboard";
function App() {
  return (
    <BrowserRouter>
      <UserDashboard />
      <Routes>
        {/* <Route path="/" element={<UserDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;