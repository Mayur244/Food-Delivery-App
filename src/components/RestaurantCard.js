import React from "react";
import { RES_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div>
      {/* <label>closed</label> */}
      <div className="m-4 p-4 w-48  bg-slate-100 rounded-lg hover:bg-slate-200">
      <img
        className="rounded-lg w-56 h-28 object-cover"
        alt="res-logo"
        src={RES_IMG + cloudinaryImageId}
        loading="lazy"
      ></img>
      <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
      <h4 className="text-slate-500 mr-3">
        {avgRating} stars • {resData?.info?.sla?.deliveryTime} min
      </h4>
      <h4 className="text-slate-500">{costForTwo}</h4>
      <h4 className="text-slate-500 truncate">{cuisines.join(", ")}</h4>
    </div>
    </div>
  );
};


// Higher order function ( HOF )
// HOF takes a component [ex-RestaurantCard] as a input and returns a new component (with some features) [ex-() => {}] 
export const isRestaurantOpened = (RestaurantCard) => {
  return (props) => {   //new componenet
    return(
      <div>
        <label className="absolute bg-green-400 text-white m-1 p-1 rounded-lg shadow-lg font-semibold">open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
