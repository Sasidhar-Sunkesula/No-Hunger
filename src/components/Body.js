import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import NoInternet from "./NoInternet";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [dupelistOfRestaurants, setdupelistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    displayData();
  }, []);

  const displayData = async () => {
    try {
      const data = await fetch(API_URL);

      const json = await data.json();
      console.log(json);
      const allRestaurants =
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

      setlistOfRestaurants(allRestaurants);
      setdupelistOfRestaurants(allRestaurants);
      console.log(
        "data:",
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0]
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (onlineStatus === false) {
    return <NoInternet />;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body w-full">
      <div className="filter h-16 flex items-center justify-between m-14 mb-6">
        <div className="search-class items-center flex flex-wrap ">
          <div>
            <input
              className="search-box border-2 rounded-3xl border-red-400 w-64 px-3 py-2"
              name="search-box"
              type="text"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <button
              data-testid="SearchBtn"
              className="search-btn border-2 text-lg rounded-3xl py-2 w-24 font-medium px-4 bg-red-400 text-white ml-5 "
              onClick={() => {
                const searchList = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setdupelistOfRestaurants(searchList);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="changeUserName">
          <label className="text-lg font-semibold">Set User Name:</label>
          <input
            className="border-2 rounded-sm border-red-400 w-64 px-3 py-2 ml-4"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={loggedInUser}
          ></input>
        </div>
        <div className="filter-btn-class  px-4 py-2 border-2 border-red-400 bg-white text-lg rounded-full text-slate-700 mr-52">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setdupelistOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="mb-7 text-center font-bold text-4xl">
        All Restaurants in Narasaraopet
      </div>
      <div className="res-container flex gap-7 flex-wrap justify-center">
        {dupelistOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
