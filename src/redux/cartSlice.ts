import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./authSlice";

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  description?: string;
  quantity: number;
}

// Load initial cart for the currently logged in user (if any)
const savedUser = localStorage.getItem("loggedUser");
let initialState: CartItem[] = [];
if (savedUser) {
  try {
    const email = JSON.parse(savedUser).email;
    const savedCart = localStorage.getItem(`cart_${email}`);
    if (savedCart) initialState = JSON.parse(savedCart);
  } catch (e) {
    initialState = [];
  }
} else {
  // fallback to a global cart key if needed
  const savedCart = localStorage.getItem("cart");
  if (savedCart) initialState = JSON.parse(savedCart);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const payload = { ...action.payload } as any;
      // ensure price is a number
      payload.price = typeof payload.price === "string" ? parseFloat(payload.price) || 0 : payload.price;

      const item = state.find((i) => i.id === payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...payload, quantity: 1 });
      }
      // persist
      try {
        const su = localStorage.getItem("loggedUser");
        const key = su ? `cart_${JSON.parse(su).email}` : "cart";
        localStorage.setItem(key, JSON.stringify(state));
      } catch (e) {}
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      try {
        const su = localStorage.getItem("loggedUser");
        const key = su ? `cart_${JSON.parse(su).email}` : "cart";
        localStorage.setItem(key, JSON.stringify(state));
      } catch (e) {}
    },
    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
      try {
        const su = localStorage.getItem("loggedUser");
        const key = su ? `cart_${JSON.parse(su).email}` : "cart";
        localStorage.setItem(key, JSON.stringify(state));
      } catch (e) {}
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const next = state.filter((i) => i.id !== action.payload);
      try {
        const su = localStorage.getItem("loggedUser");
        const key = su ? `cart_${JSON.parse(su).email}` : "cart";
        localStorage.setItem(key, JSON.stringify(next));
      } catch (e) {}
      return next;
    },
  },
  extraReducers: (builder) => {
    // when user logs in, load their persisted cart
    builder.addCase(loginUser, (state, action: PayloadAction<any>) => {
      try {
        const email = action.payload?.email;
        if (email) {
          const saved = localStorage.getItem(`cart_${email}`);
          return saved ? JSON.parse(saved) : [];
        }
      } catch (e) {}
      return state;
    });

    // on logout clear the in-memory cart (but keep persisted data)
    builder.addCase(logoutUser, () => {
      return [];
    });
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
