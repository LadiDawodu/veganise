import axios from "axios";

// Define your API endpoint URL
const apiUrl = "https://api.yelp.com/v3/businesses/search";

// Define your API key
const apiKey =
  "2n_T11KN6acX6xRKB13dEcY8W_pHKqVYUfMVhmBBLzyEglfzS2cYKPy8enXiIq-igD6iDPJHdEoBhhHx1T6oW7xhKH05axyWeAZnOdN86HqOFFCfX9nU-No2yv04ZXYx";

// Define your request parameters
const apiParams = {
  location: "London",
  term: "restaurants",
  categories: "vegan",
  price: "1,2,3,4",
  sort_by: "review_count",
  limit: 30,
};

// Initialize a cache object for restaurant data and open times
const restaurantDataCache = {};
const openTimesCache = {};

export const fetchRestaurantData = async () => {
  const apiUrlWithParams = `${apiUrl}?location=${encodeURIComponent(
    apiParams.location
  )}&term=${encodeURIComponent(apiParams.term)}&categories=${encodeURIComponent(
    apiParams.categories
  )}&price=${encodeURIComponent(apiParams.price)}&sort_by=${encodeURIComponent(
    apiParams.sort_by
  )}&limit=${apiParams.limit}`;

  let restaurants;

  try {
    /*if (restaurantDataCache[apiUrlWithParams]) {
      // If restaurant data is available in the cache, use it
      console.log("Restaurant data from cache");
      restaurants = restaurantDataCache[apiUrlWithParams];

      return restaurants;
    } else {*/
    // Otherwise, make the API request for restaurant data

    const response = await axios.get(apiUrlWithParams, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Access-Control-Allow-Origin": "*",
      },
    });

    // Store the restaurant data in the cache
    // restaurantDataCache[apiUrlWithParams] = response.data;
    console.log(response);
  } catch (error) {
    console.error("Error fetching restaurant data", error);
  }
};

// Function to fetch and display open times with a delay
async function fetchOpenTimes(businessId) {
  const hoursUrl = `https://api.yelp.com/v3/businesses/${businessId}`;

  try {
    if (openTimesCache[businessId]) {
      // If open times data is available in the cache, use it
      return openTimesCache[businessId];
    } else {
      // Otherwise, make the API request for open times
      const hoursResponse = await axios.get(hoursUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (hoursResponse.data.hours) {
        // Store the open times data in the cache
        openTimesCache[businessId] = hoursResponse.data.hours[0].open;
        return hoursResponse.data.hours[0].open;
      } else {
        console.log("No hours available");
        return [];
      }
    }
  } catch (hoursError) {
    console.error("Error fetching open times", hoursError);
    throw hoursError;
  }
}

export const fetchOpenTimesForRestaurant = async (businessId) => {
  try {
    const openTimes = await fetchOpenTimes(businessId);
    return openTimes;
  } catch (error) {
    console.error("Error fetching open times for restaurant", error);
    throw error;
  }
};
