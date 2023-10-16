import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Container from "./Components/Container.jsx";
import Body from "./Components/Body/Body.jsx";
import SideMenu from "./Components/SideMenu/SideMenu.jsx";
import RegistrationModal from "./Components/Registration/RegistrationModal.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { auth } from "./firebase.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.debug("user has changed", user);
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (authenticated === undefined) {
    console.log("no user");
    return <p>Woow...</p>;
  }
  console.log("authenticated:", authenticated);
  return (
    <Router>
      <div>
        <Navbar authenticated={authenticated} />

        <div className="flex items-center justify-center ">
          <Routes>
            <Route path="/" element={<Container />}>
              {/* Nested routes */}
              <Route index element={<Body authenticated={authenticated} />} />
              <Route
                path="/menu"
                element={<SideMenu authenticated={authenticated} />}
              />
              <Route
                path="/menu"
                element={
                  authenticated !== undefined && (
                    <SideMenu authenticated={authenticated} />
                  )
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
