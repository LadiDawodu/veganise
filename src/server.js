const express = require("express");
const cors = require("cors");
const api = require("./apiProduction.js");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = process.env.PORT || 5173;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/api/restaurantData", async (req, res) => {
  try {
    const restaurantData = await api.fetchRestaurantData();
    res.json(restaurantData);
  } catch (error) {
    console.log("Error fetching", error);
    res.status(500).json({ error: "An error while fetching restaurant data " });
  }
});

app.get("/api/openTimes/:businessId", async (req, res) => {
  const businessId = req.params.businessId;

  try {
    const openTimes = await api.fetchOpenTimesForRestaurant(businessId);
    res.json(openTimes);
  } catch (error) {
    console.error("Error fetching open times", error);
    res.status(500).json({ error: "An error occured" });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
