import React from 'react'
import RestaurantCardPropTypes from './RestaurantCardPropTypes'

const RestaurantCard = ({name, imgaeSrc, cuisine, rating}) => {

  return (
    <div className="singleRestaurant w-[calc(33.33% - 20px)] bg-colorOne p-3 rounded-[10px]">
    <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
      <img
        src={veganBurgers}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
    <h1 className="restaurantName block text-center font-bold opacity-90 pt-4">
      Mildreds
    </h1>
    <small className="block text-center text-[#808080] font-medium">
      International Cuisine
    </small>

    <div className="info mt-5 flex justify-center items-center ">
      <div className="singleInfo border-x-2 grid px-3">
        <AiFillStar className="flex mt-auto justify-center items-center" />
        <h4 className="font-semibold ">3.4</h4>
      </div>

      <div className="singleInfo border-x-2 grid px-3">
        <AiFillStar className="flex mt-auto justify-center items-center" />
        <h4 className="font-semibold ">3.4</h4>
      </div>
      <div className="singleInfo border-x-2 grid px-3">
        <AiFillStar className="flex mt-auto justify-center items-center" />
        <h4 className="font-semibold ">3.4</h4>
      </div>
    </div>
  </div>
  )
}

export default RestaurantCard