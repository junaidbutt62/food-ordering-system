import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/authSlice";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [error, setError] = useState("");

  // Regex validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  const handleSignup = () => {
  if (!emailRegex.test(email)) {
    setError("Invalid email format.");
    return;
  }

  if (!passwordRegex.test(password)) {
    setError(
      "Password must be 8 characters, include 1 capital & 1 special character."
    );
    return;
  }

  if (password !== confirmPass) {
    setError("Passwords do not match.");
    return;
  }

  setError("");

  // Use redux action to save user to localStorage via reducer
  setError("");
  dispatch(signupUser({ email, password } as any));

  // verify user saved
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const exists = users.some((u: any) => u.email === email);
  if (exists) {
    alert("Signup successful!");
    navigate("/login");
  } else {
    setError("Unable to signup. User may already exist.");
  }
};


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Create Password */}
        <input
          type="password"
          placeholder="Create password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-500"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
