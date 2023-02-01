import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownTrayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
function Navbar() {
  const [token, setToken] = useState();
  useEffect(() => {
    const tokenTemp = localStorage.getItem("token");
    setToken(tokenTemp);
  }, []);
  // useEffect(() => {}, [token]);
  const onClickLogoutHandler = (e) => {
    e.preventDefault;
    localStorage.removeItem("token");
    setToken();
  };
  return (
    <div className="grid grid-cols-2 px-5 py-5 items-center">
      <div className="navbar flex justify-center flex-wrap">
        <div className="w-full flex justify-start">
          <p className="font-bold  font-quicksand text-2xl text-slate-700">
            UMKM
          </p>
        </div>
        <div className="w-full flex justify-start">
          <p className="text-2xl text-slate-700">DESA PITON</p>
        </div>
      </div>
      <div className="w-full flex justify-end">
        {(() => {
          if (token) {
            return (
              <div class="dropdown dropdown-end ">
                <label
                  tabindex="0"
                  class="btn rounded-btn btn-ghost gap-2 flex"
                >
                  <p>Menu</p>
                  <ChevronDownIcon className="h-6 w-6 text-slate-800" />
                </label>
                <ul
                  tabindex="0"
                  class="menu dropdown-content p-2 shadow bg-slate-50 rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1fRukZAu-HX_P_xNNEouwDoyfh93haKG3/view?usp=sharing"
                      target={"_blank"}
                      className="flex w-full justify-between"
                    >
                      <p>Perdes UMKM</p>
                      <ArrowDownTrayIcon className="h-5 w-5 text-slate-800" />
                    </a>
                  </li>
                  <li>
                    <button
                      className="text-red-800"
                      onClick={(e) => {
                        onClickLogoutHandler(e);
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              // <div className="flex w-full  gap-3 justify-end">
              //   <button className="btn">
              //     <Link href="/dashboard">Dashboard</Link>
              //   </button>
              // </div>
            );
          } else {
            return (
              <div class="dropdown dropdown-end ">
                <label
                  tabindex="0"
                  class="btn rounded-btn btn-ghost gap-2 flex"
                >
                  <p>Menu</p>
                  <ChevronDownIcon className="h-6 w-6 text-slate-800" />
                </label>
                <ul
                  tabindex="0"
                  class="menu dropdown-content p-2 shadow bg-slate-50 rounded-box w-52 mt-4"
                >
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1fRukZAu-HX_P_xNNEouwDoyfh93haKG3/view?usp=sharing"
                      target={"_blank"}
                      className="flex w-full justify-between"
                    >
                      <p>Perdes UMKM</p>
                      <ArrowDownTrayIcon className="h-5 w-5 text-slate-800" />
                    </a>
                  </li>
                </ul>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Navbar;
