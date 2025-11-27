import React, { useState } from "react";
import { ShoppingCart, Menu, X, User, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import toast from "react-hot-toast";


const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    toast("Logged out", { icon: "👋" });
    navigate("/login");
  };



  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-400">MyStore</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-amber-400 cursor-pointer">Home</li>
          <li className="hover:text-amber-400 cursor-pointer">Products</li>
          <li className="hover:text-amber-400 cursor-pointer">About</li>
          <li className="hover:text-amber-400 cursor-pointer">Contact</li>
        </ul>
        <div className="flex">
          {/* Cart Button */}
          <button onClick={() => navigate("/cart")} className="hidden md:flex items-center gap-2 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition">
            <ShoppingCart size={20} /> Cart
          </button>
          {
            isLoggedIn ? (
              <button onClick={handleLogout} className="hidden ml-5 md:flex items-center gap-2 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition">
                <User2 size={20} /> Logout
              </button>
            ) : (

              <button onClick={() => navigate("/login")} className="hidden ml-5 md:flex items-center gap-2 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition">
                <User2 size={20} /> Login
              </button>
            )
          }
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <li className="hover:text-amber-400 cursor-pointer">Home</li>
            <li className="hover:text-amber-400 cursor-pointer">Products</li>
            <li className="hover:text-amber-400 cursor-pointer">About</li>
            <li className="hover:text-amber-400 cursor-pointer">Contact</li>

            <button onClick={() => navigate("/cart")} className="flex items-center gap-2 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <ShoppingCart size={20} /> Cart
            </button>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="flex items-center gap-2 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                <User size={20} /> Logout
              </button>
            ) : (
              <button onClick={() => navigate("/login")} className="flex items-center gap-2 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                <User size={20} /> Login
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
