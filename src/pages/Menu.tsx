import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface FoodItem {
  id: number;
  name: string;
  price: string;
  dsc: string;
  img: string;
}

const MenuSection: React.FC = () => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [items, setItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SBigz/free-food-menus-api/main/menus/fried-chicken.json"
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  const shortDesc = (text: string) => {
    const words = text.split(" ");
    return words.slice(0, 6).join(" ") + (words.length > 6 ? "..." : "");
  };

  const handleAddToCart = (item: FoodItem) => {
    if (!isLoggedIn) {
      toast("Please login first!", { icon: "🔒" });
      navigate("/login");
      return;
    }

    dispatch(addToCart({ ...item, quantity: 1 } as any));
    toast.success("Item added to cart!");
  };

  return (
    <section id="Menu" className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        🍗 Our Fried Chicken Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div className="flex justify-between items-center mt-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span className="text-amber-400 font-bold">${item.price}</span>
            </div>

            <p className="text-gray-600 text-sm mt-2 mb-4">
              {shortDesc(item.dsc)}
            </p>

            <button
              onClick={() => handleAddToCart(item)}
              className="bg-amber-400 px-4 py-2 text-white hover:bg-amber-500 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
