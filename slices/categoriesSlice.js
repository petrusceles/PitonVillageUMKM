import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
    removeCategories: (state, action) => {
      state.categories = [];
    },
  },
});

export const { addCategories, removeCategories } = categoriesSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectCategories = (state) => state.categories;
export default categoriesSlice.reducer;
