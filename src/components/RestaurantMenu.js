import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import { API_URL, CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const [resList, setresList] = useState([]);

  const [showMenu, setShowMenu] = useState(true);

  const { resId } = useParams();

  const resMenu = useRestaurantMenu();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);

      const json = await data.json();

      const allRestaurants =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

      setresList(allRestaurants);

      //console.log(allRestaurants);
    } catch (err) {
      console.log(err);
    }
  };

  //console.log(resMenu);

  if (resList.length == 0 || resMenu === null) {
    return <Shimmer />;
  }

  const matchedRestaurant = resList.filter((res) => res.info.id == resId);
  //console.log(resList);

  //console.log(matchedRestaurant[0]);

  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    id,
    locality,
    sla,
  } = matchedRestaurant[0].info;

  const { meals } = resMenu;

  const handleClick = () => {
    setShowMenu(!showMenu);
    // if(showMenu===true){
    //   setShowMenu(false);
    // }
    // else{
    //   setShowMenu(true)
    // }
  };

  /*
{   this object will be passed to the 2nd argument of reducer function
  payload: data we passed
}
  */

  return (
    <div className="w-screen">
      <div className="res-info w-3/5 mx-auto  mb-2 px-12 py-10 shadow-lg rounded-lg flex items-center justify-between">
        <div className="left w-3/5">
          <div className="font-bold text-2xl p-2">{name}</div>
          <div className="font-semibold text-lg p-2 text-slate-500">
            {cuisines.join(", ")}
          </div>
          <div className="flex p-2 justify-between w-4/5">
            <div className="font-semibold text-lg">{locality}</div>
            <div className="font-semibold text-lg">
              Delivery In: {sla.deliveryTime}mins
            </div>
          </div>

          <div className="flex justify-between p-2 w-4/5">
            <div className="font-medium text-white text-base rounded-sm bg-green-400 px-2 py-1">
              {avgRating}⭐
            </div>
            <div className="font-medium text-base">{costForTwo}</div>
          </div>
        </div>
        <div className="right">
          <img
            src={CDN_URL + cloudinaryImageId}
            className="w-80 h-56 object-cover rounded-xl"
          ></img>
        </div>
      </div>
      <div className="rounded-lg shadow-2xl w-2/5 border-2 mx-auto">
        <div
          className="flex justify-between items-center cursor-pointer my-4 bg-slate-100 shadow-sm font-bold text-lg p-4 rounded-lg w-4/5 mx-auto"
          onClick={() => handleClick()}
        >
          <div>All Items ({meals.length})</div>

          <button>+</button>
        </div>
        {showMenu && meals.map((item) => <ItemList key={item.idMeal} itemObj={item} />)}
      </div>
    </div>
  );
};
export default RestaurantMenu;
