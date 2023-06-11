"use cliet";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queriedMeal: "",
  isCategory: false,
};
const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setQueriedMeal: (state, action) => {
      state.queriedMeal = action.payload;
    },
    setIsCategory: (state, action) => {
      state.isCategory = action.payload;
    },
  },
});

export const { setQueriedMeal, setIsCategory } = mealSlice.actions;
export default mealSlice.reducer;
