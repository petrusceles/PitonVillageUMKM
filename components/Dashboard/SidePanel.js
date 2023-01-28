import React from "react";
import { DocumentChartBarIcon} from "@heroicons/react/24/solid";
import {TagIcon } from "@heroicons/react/24/outline";
function SidePanel() {
  return (
    <div className="flex flex-wrap bg-white drop-shadow-xl">
      <div className="hover:bg-slate-100 cursor-pointer w-full px-5 flex gap-3 py-5 items-center h-fit text-slate-600">
        <DocumentChartBarIcon className="w-5 h-5" />
        <p className="text-sm font-bold">UMKM</p>
      </div>
      <div className="hover:bg-slate-100 cursor-pointer w-full px-5 flex gap-3 py-5 items-center h-fit text-slate-600">
        <TagIcon className="w-5 h-5" />
        <p className="text-sm">Kategori</p>
      </div>
    </div>
  );
}

export default SidePanel;
