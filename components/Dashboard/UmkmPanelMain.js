import React from "react";
import { useEffect } from "react";
import axios from "axios";
import UmkmPanelCard from "./UmkmPanelCard";
import { toast } from "react-toastify";
function UmkmPanelMain({ companiesState, pageState, editUmkmState }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCompaniesRequest = await axios.get(
          "http://localhost:3456/api/companies"
        );

        const currentCompaniesResponse = currentCompaniesRequest.data;
        // console.log(currentCompaniesResponse);
        if (currentCompaniesResponse.status) {
          const companiesResponseData = currentCompaniesResponse.data.companies;
          // console.log(companiesResponseData);
          companiesState.setCompanies(companiesResponseData);
        } else {
          toast.error("no data retrieved");
        }
      } catch (err) {
        toast.error(err);
      }
    };

    fetchData();
  }, [pageState.page]);
  useEffect(() => {}, [companiesState.companies]);
  return (
    <div className="flex flex-wrap gap-8 h-fit">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-xl">List UMKM</h1>
        <button
          className="btn capitalize px-8 text-base"
          onClick={() => {
            pageState.setPage("Tambah");
          }}
        >
          Tambah UMKM
        </button>
      </div>
      <div className="w-full grid grid-cols-5 gap-12">
        {companiesState.companies.map((e, i) => (
          <UmkmPanelCard
            key={e.id}
            id={e.id}
            name={e.name}
            owner={e.owner}
            coordinate={e.coordinate}
            picture_url={e.picture_url}
            category={e.category.name}
            editUmkmState={editUmkmState}
            pageState={pageState}
          />
        ))}
      </div>
    </div>
  );
}

export default UmkmPanelMain;
