import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedCompanies,
  selectSelectedCompanies,
} from "../slices/selectedCompaniesSlice";

function ListMenu({ name, companyId }) {
  const selectedCompaniesList = useSelector(selectSelectedCompanies);
  const dispatch = useDispatch();

  const checkCheckbox = useRef();

  useEffect(() => {
    const selectedCompanies = selectedCompaniesList.selectedCompanies;
    if (selectedCompanies.includes(companyId)) {
      checkCheckbox.current.checked = true;
    }
  }, [selectedCompaniesList]);

  const onChangeCheckbox = (e) => {
    const isChecked = e.currentTarget.checked;
    let selectedCompanies = [...selectedCompaniesList.selectedCompanies];
    if (isChecked) {
      if (!selectedCompanies.includes(companyId)) {
        selectedCompanies.push(companyId);
      }
    } else {
      if (selectedCompanies.includes(companyId)) {
        selectedCompanies = selectedCompanies.filter((e) => e != companyId);
      }
    }
    dispatch(
      addSelectedCompanies({
        selectedCompanies: selectedCompanies,
      })
    );
    // console.log(selectedCompanies);
  };
  return (
    <div className="flex justify-between w-full">
      <p>{name}</p>
      <input
        type={"checkbox"}
        className="checkbox checkbox-sm"
        onChange={(e) => onChangeCheckbox(e)}
        ref={checkCheckbox}
      />
    </div>
  );
}

export default ListMenu;
