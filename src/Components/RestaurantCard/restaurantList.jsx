import React, { useState, useEffect } from "react";
import {
  fetchOpenTimesForRestaurant,
  fetchRestaurantData,
} from "../../apiProduction.js"; // Import your API functions
import restaurantCard from "./restaurantCard.jsx"; // Replace with the correct path

function RestaurantList() {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Fetch restaurant data when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchRestaurantData();
        setRestaurantData(data.businesses);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="restaurant-list">
      {restaurantData.map((restaurant) => (
        <restaurantCard
          key={restaurant.id}
          name={restaurant.name}
          rating={restaurant.rating}
          reviewCount={restaurant.review_count}
          categories={restaurant.categories
            .map((category) => category.title)
            .join(", ")}
          location={restaurant.location}
          hours={restaurant.hours[0]?.open}
          image_url={restaurant.image_url}
          price={restaurant.price}
          is_closed={restaurant.is_closed}
        />
      ))}
    </div>
  );
}

export default RestaurantList;
