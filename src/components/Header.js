import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnValue, setbtnValue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  // Subscribing to the portion(items) of the slice
  const itemList = useSelector((store) => store.cart.items);

  const { loggedInUser } = data;

  return (
    <div className="flex justify-around border-b-4 border-red-400 shadow-2xl items-center h-28 text-lg text-slate-600 font-medium ">
      <div className="flex items-center font-serif text-2xl font-semibold text-red-500">
        <Link to="/">
          <img className="w-40 animate-bounce " src={LOGO_URL}></img>
        </Link>
        <p>NoHunger</p>
      </div>
      <div className="nav-bar flex space-x-10">
        <div className="nav-items">
          <ul className="flex space-x-10">
            <li>Online Status:{onlineStatus ? " 🟢 " : " 🔴 "}</li>
            <Link to="/grocery">Grocery</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart" className="cursor-pointer text-xl font-bold">
              Cart - {itemList.length} items
            </Link>
          </ul>
        </div>
        <div className="btn-container">
          <button
            className="w-12"
            onClick={() => {
              if (btnValue === "Logout") setbtnValue("Login");
              else setbtnValue("Logout");
            }}
          >
            {btnValue}
          </button>
        </div>
        <div>{loggedInUser}</div>
      </div>
    </div>
  );
};

export default Header;
