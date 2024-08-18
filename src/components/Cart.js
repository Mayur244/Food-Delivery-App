import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        {cartItems == 0 ? (
          <h1 className="text-xl font-semibold mt-8">Cart is empty !!</h1>
        ) : (
          <ItemList items={cartItems}></ItemList>
        )}
      </div>
      {cartItems == 0 ? (
        <Link to = "/"><button className="bg-black text-white rounded-lg p-2 m-3 mt-8">
          Go to Restaurants
        </button></Link>
      ) : (
        <button
          onClick={clearCartHandler}
          className="bg-black text-white rounded-lg p-2 m-3"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
