import axios from "axios";

const apiKey =
  "1GKURvM9ZWszEO-4coZ4v2c9AfuhzkFIu7ygg0Tng5OvmP2gF6slwVrYLOCCNz4_6WzAzpzMIYD1wRIWOdJm-FLppBxG4KfGa9XabPF62QsXw2ti374Ll8OqU0oxZXYx";
const location = "London";
const term = "Vegan Restaurant";
const categories = "Vegan";

// Initialize a cache object for restaurant data and open times
const restaurantDataCache = {};
const openTimesCache = {};

export const fetchRestaurantData = async () => {
  const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(
    location
  )}&term=${encodeURIComponent(term)}&categories=${encodeURIComponent(
    categories
  )}`;

  try {
    if (restaurantDataCache[apiUrl]) {
      // If restaurant data is available in the cache, use it
      return restaurantDataCache[apiUrl];
    } else {
      // Otherwise, make the API request for restaurant data
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const restaurants = response.data.businesses;

      // Store the restaurant data in the cache
      restaurantDataCache[apiUrl] = response.data;

      return response.data;
    }
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
