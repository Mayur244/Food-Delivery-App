import { RES_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  
const dispatch = useDispatch();

const addItemHandler = (item) => {
    dispatch(addItem(item));
}



  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 pb-8 m-2 border-gray-200 border-b-2 text-left flex justify-around" 
        >
          <div className="w-8/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
          <div className="absolute">
          <button onClick={() => addItemHandler(item)} className="py-1 px-6 shadow-lg bg-white text-green-600 font-bold rounded-lg mx-7 my-20 text-sm">ADD</button>
            </div>
            <img src={RES_IMG + item.card.info.imageId} className="rounded-lg w-56 h-24 object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
