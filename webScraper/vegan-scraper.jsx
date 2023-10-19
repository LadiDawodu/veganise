const axios = require("axios");

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://veggie-me.p.rapidapi.com/restaurants",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "veggie-me.p.rapidapi.com",
  },
};
const fetchRestaurantData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
