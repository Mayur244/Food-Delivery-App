import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import { LOGO_IMG } from "../utils/constants";
import { useSelector } from "react-redux";



const Header = () => {
    const isOnline = useCheckStatus();

    const cartItems = useSelector((store) => store.cart.items);
    // console.log("cartItems");
    // console.log(cartItems);

    return(
        <div className="flex justify-between bg-pink-300">
            <div className="logo-container">
                <img className="w-24" src={LOGO_IMG}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        {
                            isOnline ? "🟢 Online" : "🔴 Offline"
                        }
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems.length} item)</Link></li>
                    <li className="px-4">Login</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;