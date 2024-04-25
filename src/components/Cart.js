import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const itemList = useSelector((store) => store.cart.items);
  //console.log(itemList);
  const dispatchFun = useDispatch();
  const handleClearCart = () => {
    dispatchFun(clearCart());
  };

  return (
    <div className="w-3/5 mt-4 shadow-xl rounded-lg p-4 mx-auto relative">
      <div className="text-xl w-4/5 text-center mt-5 mb-3 mx-auto font-bold">
        Cart - {itemList.length} items
      </div>
      <div className="w-4/5 text-right mx-auto">
        <button
          onClick={() => handleClearCart()}
          className=" bg-red-500 p-2  font-medium text-sm rounded-lg text-white"
        >
          Clear Cart
        </button>
      </div>
      <div>
        {itemList.map((item) => {
          return <ItemList key={item.idMeal} itemObj={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
