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
import axios from "axios";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://api.yelp.com/v3/businesses/search?location=London&term=Vegan Restaurant&categories=Vegan";

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);

        setRestaurantData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

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
              <Route
                index
                element={
                  <Body
                    authenticated={authenticated}
                    restaurantData={restaurantData}
                  />
                }
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
