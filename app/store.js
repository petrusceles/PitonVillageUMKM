import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categoriesSlice";
import selectedCompaniesReducer from "../slices/selectedCompaniesSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    selectedCompanies: selectedCompaniesReducer,
  },
});
