import  React from "react"
import { Route,Routes, Navigate}from "react-router-dom"

import Navbar from "./Components/Navbar"
import ProblemsPage from "./Components/ProblemsPage"
import HomePage from "./Components/HomePage"
import Login from "./Components/Login"
import AllProblems from "./Components/AllProblems"
import Signup from "./Components/Signup"

import "./App.css"
import { useEffect, useState } from "react";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // Check localStorage for login status during initialization
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    // Implement your login logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
    localStorage.removeItem("token");
  };
  return (
    <>
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
    <Routes>
    <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            loggedIn ? (
              <Navigate to="/" /> // Redirect to home if already logged in
            ) : (
              <Signup />
            )
          }
        />
      <Route
  path="/login"
  element={
    loggedIn ? (
      <Navigate to="/" /> // Redirect to home if already logged in
    ) : (
      <Login setLoggedIn={handleLogin} loggedIn={loggedIn} /> // Pass loggedIn prop
    )
  }
/>
        <Route path="/problemset/all/" element={<AllProblems />} />
        <Route path="/problems/:pid/" element={<ProblemsPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </>
  );
}

export default App;
