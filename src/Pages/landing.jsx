import React from "react";
//import {Link} from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase.jsx";
import { signIn } from "../auth.jsx";

const Landing = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password, auth);
      setAuthenticated(true);
      navigate("/container");
    } catch (error) {
      console.error("login error:", error.message);
      setLoginError(error.message);
    }
  };

  // Function to handle restaurant search
  const handleSearch = (searchTerm) => {
    // Implement your restaurant search logic here
  };

  return (
    <div className="landing">
      <div className="login-container">
        <h2>Welcome to Veganise</h2>
        <p>Log in to discover vegan restaurants near you.</p>
        <form onSubmit={handleLogin}>
          {/* Login form */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
        </form>
        {authenticated && navigate("/container")}
        {loginError && <p className="error">{loginError}</p>}
      </div>

      <div className="search-container">
        <h2>Search for Vegan Restaurants</h2>
        {/* Restaurant search bar */}
        <input
          type="text"
          placeholder="Enter a location or cuisine"
          onChange={(e) => handleSearch(e.target.value)}
        />
        {/* Display search results here */}
      </div>
    </div>
  );
};

export default Landing;
