import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCompanies: [],
};

export const selectedCompaniesSlice = createSlice({
  name: "selectedCompanies",
  initialState,
  reducers: {
    addSelectedCompanies: (state, action) => {
      state.selectedCompanies = action.payload.selectedCompanies;
    },
    removeSelectedCompanies: (state, action) => {
      state.selectedCompanies = [];
    },
  },
});

export const { addSelectedCompanies, removeSelectedCompanies } =
  selectedCompaniesSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectSelectedCompanies = (state) => state.selectedCompanies;
export default selectedCompaniesSlice.reducer;
