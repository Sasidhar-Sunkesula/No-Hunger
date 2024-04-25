import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemObj }) => {
  const { idMeal, strMeal, strMealThumb } = itemObj;

  const dispatchFun = useDispatch();

  const handleAddItem = (item) => {
    dispatchFun(addItem(item));
  };

  return (
    <div
      className="flex justify-between p-4 rounded-lg my-3 w-4/5 mx-auto bg-orange-50 items-center"
      key={idMeal}
    >
      <div className="font-semibold text-lg">{strMeal}</div>
      <div className="relative">
        <img className="w-36 h-28 rounded-md" src={strMealThumb}></img>
        <button
          onClick={() => handleAddItem(itemObj)}
          className="absolute px-2 py-1 hover:text-white hover:bg-green-500 font-medium rounded-lg bottom-1 left-1/4 bg-white text-green-600"
        >
          ADD +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
