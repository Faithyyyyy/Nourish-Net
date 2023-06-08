"use client";

import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./Features/mealSlice";

export const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
});
