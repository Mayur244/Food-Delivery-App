import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInformation = useRestaurantMenu(resId);

  if (resInformation === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInformation?.cards[2]?.card?.card?.info;

  const categories =
    resInformation?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p className="text-lg font-bold">{avgRating} Ratings</p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
