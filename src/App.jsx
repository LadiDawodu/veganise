import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./Components/Container";
import Body from "./Components/Body/Body.jsx";
import SideMenu from "./Components/SideMenu/SideMenu.jsx";
import Registration from "./Components/Registration/Registration.jsx";

import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <div>
      <Navbar />

    <div className="flex items-center justify-center ">
      <Router>
        <Routes>
          <Route path="/" element={<Container />}>
            {/* Nested routes */}
            <Route index element={<Body />} />
            <Route path="/menu" element={<SideMenu />} />
          </Route>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
};

export default App;
