import ItemList from "./ItemList";
import { useState } from "react";
import React from "react";

const RestaurantCategory = ({data}) => {
  const [showItems, setShowItems] = useState(false);  
  const [showArrow, setShowArrow] = useState("+")
  const handleAccordian = () => {
    setShowItems(!showItems);
    showItems ? setShowArrow("+") : setShowArrow("-");
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleAccordian}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl font-bold">{showArrow}</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
