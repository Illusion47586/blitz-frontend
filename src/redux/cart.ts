import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

type ProductType = {
  name: string;
  id: string;
  imageUrl: string;
  type?: string;
  subType?: string;
  color?: string;
};

interface CartState {
  items: ProductType[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      if (state.items.length < 2) state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index: number = state.items.findIndex(
        (p, i, arr) => p.id === action.payload
      );
      state.items = state.items.splice(Math.max(index, 0), 1);
    },
    buy: (state) => {
      /**
       * Add data into the server
       */
      axios
        .post("http://localhost:8000/buy", {
          top: state.items[0].id,
          bottom: state.items[1].id,
        })
        .then((response) => {
          if (response.status === 201) window.alert("Order successful!");
          else {
            console.error(response);
            window.alert("Order unsuccessful!");
          }
        })
        .catch((err) => {
          console.error(err);
          window.alert("Order unsuccessful!");
        });
    },
  },
});

export type { ProductType };

export const { addItem, removeItem, buy } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
