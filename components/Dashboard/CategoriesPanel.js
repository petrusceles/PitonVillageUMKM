import React, { useEffect, useState } from "react";
import CategoriesPanelAdd from "./CategoriesPanelAdd";
import CategoriesPanelEdit from "./CategoriesPanelEdit";
import CategoriesPanelMain from "./CategoriesPanelMain";
function CategoriesPanel({ categoriesState }) {
  const [page, setPage] = useState("List");
  const [editCategories, setEditCategories] = useState();
  // const []
  useEffect(() => {}, [page]);
  return (
    <div className="px-8 py-8 bg-slate-50 text-slate-800 flex flex-wrap overflow-auto no-scrollbar h-screen ">
      {/* <div className="text-sm breadcrumbs w-full">
        <ul>
          {breadcrumbsList.filter((e, i) => e === page).map((e,i) => (<li><a>{e}</a></li>))}
        </ul>
      </div> */}
      {(() => {
        if (page === "Tambah") {
          return <CategoriesPanelAdd pageState={{ page, setPage }} />;
        } else if (page === "Edit") {
          return (
            <CategoriesPanelEdit
              pageState={{ page, setPage }}
              editCategoriesState={{ editCategories, setEditCategories }}
            />
          );
        } else {
          return (
            <CategoriesPanelMain
              categoriesState={categoriesState}
              pageState={{ page, setPage }}
              editCategoriesState={{ editCategories, setEditCategories }}
            />
          );
        }
      })()}
      {/* <UmkmPanelAdd /> */}
      {/* <UmkmPanelEdit /> */}
    </div>
  );
}

export default CategoriesPanel;
