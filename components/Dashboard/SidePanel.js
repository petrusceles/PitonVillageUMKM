import React, { useEffect } from "react";
import {
  DocumentChartBarIcon as DocumentChartBarIconSolid,
  TagIcon as TagIconSolid,
} from "@heroicons/react/24/solid";
import { TagIcon, DocumentChartBarIcon } from "@heroicons/react/24/outline";
function SidePanel({ panelState }) {
  const onClickUmkmPanelHandler = (e) => {
    e.preventDefault;
    panelState.setPanel("Umkm");
  };
  const onClickCategoriesPanelHandler = (e) => {
    e.preventDefault;
    panelState.setPanel("Categories");
  };
  useEffect(() => {}, [panelState.panel]);
  return (
    <div className="flex flex-wrap">
      <div
        className="hover:bg-slate-100 cursor-pointer w-full px-5 flex gap-3 py-5 items-center h-fit text-slate-600"
        onClick={(e) => {
          onClickUmkmPanelHandler(e);
        }}
      >
        {(() => {
          if (panelState.panel == "Umkm") {
            return <DocumentChartBarIconSolid className="w-5 h-5" />;
          }
          return <DocumentChartBarIcon className="w-5 h-5" />;
        })()}
        <p
          className={`text-sm ${
            panelState.panel == "Umkm" ? "font-bold" : "font-normal"
          }`}
        >
          UMKM
        </p>
      </div>
      <div
        className="hover:bg-slate-100 cursor-pointer w-full px-5 flex gap-3 py-5 items-center h-fit text-slate-600"
        onClick={(e) => {
          onClickCategoriesPanelHandler(e);
        }}
      >
        {(() => {
          if (panelState.panel == "Categories") {
            return <TagIconSolid className="w-5 h-5" />;
          }
          return <TagIcon className="w-5 h-5" />;
        })()}
        <p
          className={`text-sm ${
            panelState.panel == "Categories" ? "font-bold" : "font-normal"
          }`}
        >
          Kategori
        </p>
      </div>
    </div>
  );
}

export default SidePanel;
