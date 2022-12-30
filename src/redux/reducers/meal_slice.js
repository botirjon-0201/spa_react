import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
};

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    setMeals(state, action) {
      state.meals = action.payload;
    },
  },
});

export default mealSlice.reducer;
export const { setMeals } = mealSlice.actions;
