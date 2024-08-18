import RestaurantCard, {isRestaurantOpened} from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "../utils/useAllRestaurants";
import useCheckStatus from "../utils/useCheckStatus";
import OfflinePage from "./OfflinePage";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [listOfRestaurants, filteredRestaurant, setFilteredRestaurant] =
    useAllRestaurants();
  const isOnline = useCheckStatus();
  const OpenRestaurant = isRestaurantOpened(RestaurantCard);


  if (isOnline == false) {
    return (
      <div>
        <OfflinePage />
      </div>
    );
  }

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-1 p-1">
          <input
            type="text"
            className="border border-solid border-black p-1 ml-2"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 m-4 bg-green-200 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              restaurant.info.isOpen ? (<OpenRestaurant resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
