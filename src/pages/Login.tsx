import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email.");
    return;
  }
  if (password.length < 1) {
    setError("Password is required.");
    return;
  }

  // use redux action which will validate and persist `loggedUser` in localStorage
  setError("");
  dispatch(loginUser({ email, password } as any));

  // Check result saved to localStorage by reducer (synchronous)
  const saved = localStorage.getItem("loggedUser");
  if (saved) {
    toast.success("Login Successful!");
    navigate("/");
  } else {
    toast.error("No user found or incorrect credentials.");
    setError("No user found or incorrect credentials.");
  }
};



  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-amber-400 text-white py-3 rounded-lg hover:bg-amber-500"
        >
          Login
        </button>

        <p className="text-center mt-4">
          I don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-amber-400 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
