import { useEffect, useState } from "react";
import { selectCategories } from "../slices/categoriesSlice";
// import selectedCompaniesSlice from "../slices/selectedCompaniesSlice";
// import { selectSelectedCompanies } from "../slices/selectedCompaniesSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import ListSection from "./ListSection";
import {
  selectSelectedCompanies,
  removeSelectedCompanies,
} from "../slices/selectedCompaniesSlice";

function List() {
  let categoriesList = useSelector(selectCategories);
  const [categoriesListArray, setCategoriesListArray] = useState([]);

  const dispatch = useDispatch();
  let selectedCompaniesList = useSelector(selectSelectedCompanies);

  const onClickResetButtonHandler = (e) => {
    // console.log(selectedCompaniesList);
    e.preventDefault;
    // console.log("Masuk");
    dispatch(removeSelectedCompanies());
  };
  // let ListMapping;

  const ListMapping = (categoriesListArray) => {
    const categories = categoriesListArray.map((e, i) => {
      return <ListSection category={e} key={i} />;
    });
    // console.log(categoriesListArray);
    return categories;
  };

  useEffect(() => {
    setCategoriesListArray(categoriesList.categories);
    // console.log(categoriesListArray);

    // categoriesListArray.forEach((e, i) => {
    //   ListMapping.push(
    //     <p key={i} className="font-bold text-xl">
    //       Halo
    //     </p>
    //   );
    // });
    // for (const e of categoriesListArray) {
    //   // console.log(e);
    //   // ListMapping.push(<ListSection category={e} />);00
    //   ListMapping.push(<p className="font-bold text-xl">Halo</p>);
    // }
    // console.log(ListMapping);
  }, [categoriesList,selectedCompaniesList]);
  return (
    <div className="px-5 py-3 h-screen overflow-hidden">
      <div className="flex-wrap flex justify-end mb-3 py-3 text-lg gap-4 max-h-[65%] overflow-auto no-scrollbar">
        {ListMapping(categoriesListArray)}
      </div>
      <div className="w-full flex flex-wrap gap-3">
        <button className="btn justify-items-end btn-ghost bg-slate-100 shadow-md">
          <Link href="/map" className="text-slate-900">
            Tampilkan
          </Link>
        </button>
        <button
          className="btn btn-error btn-ghost bg-slate-100 shadow-md text-red-900"
          onClick={(e) => {
            onClickResetButtonHandler(e);
          }}
        >
          Reset
        </button>
      </div>
      {/* <p>Halo</p> */}
    </div>
  );
}

export default List;
