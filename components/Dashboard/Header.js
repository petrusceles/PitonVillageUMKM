import React from "react";
import { Bars3Icon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
function Header() {
  return (
    <div className="w-full items-center flex justify-between relative">
      <div
        className={`w-[12%] bg-emerald-200 h-full flex justify-center items-center duration-300 ease-in-out transition`}
      >
        <h1 className="text-slate-900 grow w-full text-center font-bold ">
          DashboardUMKM
        </h1>
      </div>
      <div
        className={`w-[88%] flex justify-between items-center bg-emerald-100 py-4 px-8 transition-[width] duration-300 ease-in-ou`}
      >
        <Bars3Icon className="w-7 h-7 fill-slate-900 cursor-pointer" />
        <div className="flex items-center gap-4 min-w-[150px]">
          <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-slate-50"></div>
          <p className="text-slate-900 tracking-wide text-sm">
            Admin Admin Admin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
