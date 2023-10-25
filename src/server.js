const express = require("express");
const axios = require("axios");
// const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
// Define your API endpoint URL
const apiUrl = "https://api.yelp.com/v3/businesses/search";

// Define your API key
const apiKey =
  "2n_T11KN6acX6xRKB13dEcY8W_pHKqVYUfMVhmBBLzyEglfzS2cYKPy8enXiIq-igD6iDPJHdEoBhhHx1T6oW7xhKH05axyWeAZnOdN86HqOFFCfX9nU-No2yv04ZXYx";

const params = {
  location: "London",
  term: "restaurants",
  categories: "vegan",
  price: "1,2,3,4",
  sort_by: "review_count",
  limit: 30,
};

const corsOptions = {
  origin: "http://localhost:5173", // Change this to the actual URL of your frontend app
  methods: "GET",
  optionsSuccessStatus: 204,
};

// app.use(cors(corsOptions));

app.get("/yelp-api", async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      params: req.query,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Access-Control-Allow-Origin": "*",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching Yelp data:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});
// Define your request parameters

// Set the request headers with your API key

// Make the GET request

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
