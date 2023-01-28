import React, { useEffect, useState } from "react";
import UmkmPanelAdd from "./UmkmPanelAdd";
import UmkmPanelEdit from "./UmkmPanelEdit";
import UmkmPanelMain from "./UmkmPanelMain";
const pageList = ["List", "Tambah", "Edit"];
function UmkmPanel({ companiesState }) {
  const [page, setPage] = useState("List");
  const [editUmkm, setEditUmkm] = useState();
  // const []
  useEffect(() => {}, [page]);
  return (
    <div className="px-8 py-8 bg-slate-50 text-slate-800 flex flex-wrap">
      {/* <div className="text-sm breadcrumbs w-full">
        <ul>
          {breadcrumbsList.filter((e, i) => e === page).map((e,i) => (<li><a>{e}</a></li>))}
        </ul>
      </div> */}
      {(() => {
        if (page === "Tambah") {
          return <UmkmPanelAdd pageState={{ page, setPage }} />;
        } else if (page === "Edit") {
          return (
            <UmkmPanelEdit
              pageState={{ page, setPage }}
              editUmkmState={{ editUmkm, setEditUmkm }}
            />
          );
        } else {
          return (
            <UmkmPanelMain
              companiesState={companiesState}
              pageState={{ page, setPage }}
              editUmkmState={{ editUmkm, setEditUmkm }}
            />
          );
        }
      })()}
      {/* <UmkmPanelAdd /> */}
      {/* <UmkmPanelEdit /> */}
    </div>
  );
}

export default UmkmPanel;
