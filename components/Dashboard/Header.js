import React from "react";
import {
  Bars3Icon,
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
function Header() {
  return (
    <div className="w-full items-center flex justify-between relative">
      <div
        className={`w-[12%] bg-slate-300 h-full flex justify-center items-center duration-300 ease-in-out transition`}
      >
        <h1 className="text-slate-900 py-2 px-3 rounded-full   text-center font-bold bg-slate-50">
          DashboardUMKM
        </h1>
      </div>
      <div
        className={`w-[88%] flex justify-between items-center bg-slate-700 py-4 px-8 transition-[width] duration-300 ease-in-out `}
      >
        <p className="text-slate-50 tracking-wide text-lg font-semibold">
          Halo Admin!
        </p>
        <div className="flex items-center gap-4 min-w-[150px] justify-end">
          {/* <div className="avatar placeholder">
            <div className="bg-slate-50 text-slate-900 rounded-full w-10">
              <span className="text-xl">A</span>
            </div>
          </div> */}
          <Link className="btn bg-slate-50 flex gap-2 rounded-full text-slate-900 fill-slate-900  hover:text-slate-50 hover:fill-slate-50 hover:bg-slate-500" href={'/'}>
            <p className=" capitalize">Kembali</p>
            <ArrowUturnLeftIcon className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
