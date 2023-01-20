import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCertainCompany: {},
};

export const selectedCertainCompanySlice = createSlice({
  name: "selectedCertainCompany",
  initialState,
  reducers: {
    addSelectedCertainCompany: (state, action) => {
      console.log(state);
      state.selectedCertainCompany = action.payload.selectedCertainCompany;
    },
    removeSelectedCertainCompany: (state, action) => {
      state.selectedCertainCompany = {};
    },
  },
});

export const { addSelectedCertainCompany, removeSelectedCertainCompany } =
  selectedCertainCompanySlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectSelectedCertainCompany = (state) =>
  state.selectedCertainCompany;
export default selectedCertainCompanySlice.reducer;
