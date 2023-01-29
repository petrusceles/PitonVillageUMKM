import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categoriesSlice";
import selectedCompaniesReducer from "../slices/selectedCompaniesSlice";
import selectedCertainCompanyReducer from "../slices/selectedCertainCompanySlice";
import userSliceReducer from "../slices/userSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    selectedCompanies: selectedCompaniesReducer,
    selectedCertainCompany: selectedCertainCompanyReducer,
    user: userSliceReducer,
  },
});
