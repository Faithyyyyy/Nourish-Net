"use cliet";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queriedMeal: "",
};
const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setQueriedMeal: (state, action) => {
      state.queriedMeal = action.payload;
    },
  },
});

export const { setQueriedMeal } = mealSlice.actions;
export default mealSlice.reducer;
