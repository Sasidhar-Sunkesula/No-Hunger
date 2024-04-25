import { useState, useEffect } from "react";

const useRestaurantMenu = () => {

  const [resMenu, setresMenu] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);

  const countryList= ["British", "American", "French", "Canadian", "Jamaican", "Chinese", "Indian", "Italian", "Japanese", "Russian", "Croatian", "Thai", "Portuguese"];
  
  const countryId = Math.ceil(Math.random()*countryList.length);

  const url= "https://www.themealdb.com/api/json/v1/1/filter.php?a="+countryList[countryId];

  const fetchData = async () => {
    try{
      const data = await fetch(url);
      const menu = await data.json();
      setresMenu(menu);
    }
    catch(err){
      console.log(err);
    }
  };

  return resMenu;
};

export default useRestaurantMenu;
