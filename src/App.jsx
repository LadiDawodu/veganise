import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Container from "./Components/Container";
import Body from "./Components/Body/Body.jsx";
import SideMenu from "./Components/SideMenu/SideMenu.jsx";
import Registration from "./Components/Registration/Registration.jsx";

import Navbar from "./Components/Navbar/Navbar";
import { auth } from "./firebase";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

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
            </Route>
            <Route
              path="/registration"
              element={<Registration authenticated={authenticated} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
