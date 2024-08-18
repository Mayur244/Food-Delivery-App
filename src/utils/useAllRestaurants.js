import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useAllRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    useEffect(() => {
        fetchResataurants();
    }, [])

    const fetchResataurants = async () => {
        const data = await fetch(RES_API);
        const json = await data.json();
        // console.log(json)
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return [listOfRestaurants, filteredRestaurant, setFilteredRestaurant ];
}

export default useAllRestaurants;
























// import { useState, useEffect } from "react"

// const useAllRestaurants = () => {
//     const [isOnline, setIsOnline] = (true);

//     useEffect(() => {
//         window.addEventListener("offline", () => {
//             setIsOnline(false);
//         })

//         window.addEventListener("online", () => {
//             setIsOnline(true);
//         })
//     })

//     return isOnline;
// }