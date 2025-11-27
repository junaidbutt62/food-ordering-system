import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

const savedUser = localStorage.getItem("loggedUser");

const initialState: AuthState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isLoggedIn: !!savedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupUser: (_state, action: PayloadAction<User>) => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      // prevent duplicate signup
      if (users.some((u) => u.email === action.payload.email)) {
        // duplicate - do nothing (component handles feedback)
        return;
      }

      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
    },

    loginUser: (state, action: PayloadAction<User>) => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      const found = users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (!found) {
        // not found - component will handle error
        return;
      }

      state.user = found;
      state.isLoggedIn = true;

      localStorage.setItem("loggedUser", JSON.stringify(found));
    },

    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;

      localStorage.removeItem("loggedUser");
    },
  },
});

export const { signupUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
