import React, { useEffect, useReducer } from "react";
import { selectSelectedCompanies } from "../slices/selectedCompaniesSlice";
export default function map() {
  let selectedCompaniesList = useReducer(selectSelectedCompanies);

  useEffect(() => {
    console.log(selectedCompaniesList.selectedCompanies);
  }, [selectedCompaniesList]);
  return <div>map</div>;
}
