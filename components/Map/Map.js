import React, { useEffect, useRef, useState } from "react";
import { selectSelectedCompanies } from "../../slices/selectedCompaniesSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../slices/categoriesSlice";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useRouter } from "next/router";
import { addSelectedCertainCompany } from "../../slices/selectedCertainCompanySlice";
import Link from "next/link";
import Company from "../Company";
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
//   iconUrl: "leaflet/images/marker-icon.png",
//   ShadowUrl: "leaflet/images/marker-shadow.png",
// });

// function getIcon(_iconSize) {
//   return L.icon({
//     iconUrl: "/leaflet/images/marker-icon.png",
//   });
// }

// const changePos = (position) => {
//   const map = useMap();
//   if (map) map.flyTo(position, 15);
// };
function Map() {
  let selectedCompaniesList = useSelector(selectSelectedCompanies);
  let categoriesList = useSelector(selectCategories);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    let companiesTemp = [];
    // console.log(categoriesList.categories);
    const categories = categoriesList.categories;
    for (const e of categories) {
      const companiesCollection = e.companies;
      for (const company of companiesCollection) {
        companiesTemp.push(company);
      }
    }
    // console.log(selectedCompaniesList.selectedCompanies);
    const selectedCompanies = selectedCompaniesList.selectedCompanies;
    companiesTemp = companiesTemp.filter((e, i) => {
      return selectedCompanies.includes(e.id);
    });
    setCompanies(companiesTemp);
  }, [selectedCompaniesList, categoriesList]);

  useEffect(() => {}, [companies]);

  const dispatch = useDispatch();

  const router = useRouter();

  const companyRef = useRef();

  // const [map, setMap] = useState(null);

  const map = useRef(null);

  const changePos = (position) => {
    if (map.current) map.current.flyTo(position, 15);
  };

  const onClickCertainCompanyHandler = (event, e) => {
    event.preventDefault();
    const company = companies.find((c) => c.id == event.target.id);
    dispatch(
      addSelectedCertainCompany({
        selectedCertainCompany: company,
      })
    );
    companyRef.current.classList.remove("top-[100%]");
    companyRef.current.classList.add("top-1/2");
    companyRef.current.classList.add("-translate-y-1/2");
    changePos(e.coordinate.split(", "));
  };

  const onClickCloseCompanyHandler = (e) => {
    e.preventDefault();
    companyRef.current.classList.add("top-[100%]");
    companyRef.current.classList.remove("top-1/2");
    companyRef.current.classList.remove("-translate-y-1/2");
  };
  return (
    <div className="relative no-scrollbar overflow-auto">
      <MapContainer
        center={[-8.15409, 110.990536]}
        className={`w-screen h-screen`}
        zoom={15}
        ref={map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {companies.map((e, i) => {
          return (
            <Marker position={e.coordinate.split(", ")} key={e.id}>
              <Popup>
                <div className="flex flex-wrap gap-0 items-center justify-center min-w-[150px]">
                  <p className="font-semibold ">{e.name}</p>
                  <button
                    className="btn btn-sm w-full text-xs capitalize text-slate-50"
                    onClick={(event) => {
                      onClickCertainCompanyHandler(event, e);
                    }}
                    id={e.id}
                  >
                    {/* <Link href="/company">Detail</Link> */}
                    Detail
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <div
        ref={companyRef}
        className="absolute z-[999] flex flex-wrap justify-self-center top-[100%] left-1/2 transform -translate-x-1/2 w-3/4 h-3/4 bg-opacity-100 bg-slate-200 overflow-auto rounded-lg no-scrollbar duration-300 justify-end ease-in-out transition-all  px-6 py-7 shadow-lg md:w-1/2 lg:w-[37%] xl:w-[30%]"
      >
        <button
          className="btn btn-sm mb-6"
          onClick={(e) => {
            onClickCloseCompanyHandler(e);
          }}
        >
          Close
        </button>
        <Company />
      </div>
    </div>
  );
}

export default Map;
