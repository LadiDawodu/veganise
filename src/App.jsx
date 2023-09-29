import React, { useState } from "react";
import Container from "./Components/Container";
import Landing from "./Pages/landing.jsx";
import Body from "../src/Components/Body/Body.jsx";
import SideMenu from "../src/Components/SideMenu/SideMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const handleLogin = () =>{
    setAuthenticated(true);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing handleLogin={handleLogin} />} />
        <Route
        path='/container'
        element={
          authenticated ? (
            <Container>
              <Body />
              <SideMenu />
            </Container>
          ) : (
            <Navigate to='/' replace />
          )
        }        
        />
      </Routes>
    </Router>
  );
};

export default App;

/* 
<div className="flex items-center justify-center">
  <Switch>
    <Route path="/container">
      {/* Renndering the landing.jsx file as main page */
//<Container />
//</Route>
//<Route path='/'>
{
  /* Rendering to Landing page */
}
// <Landing/>
// </Route>
//</Switch>
// </div>
