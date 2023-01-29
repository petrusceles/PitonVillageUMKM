import { useEffect, useState } from "react";
import Link from "next/link";
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
          <p className="font-bold  font-quicksand text-2xl text-slate-700">UMKM</p>
        </div>
        <div className="w-full flex justify-start">
          <p className="text-2xl text-slate-700">DESA PITON</p>
        </div>
      </div>
      <div className="w-full flex justify-end">
        {(() => {
          if (token) {
            return (
              <div className="flex w-full  gap-3 justify-end">
                <button className="btn">
                  <Link href="/dashboard">Dashboard</Link>
                </button>
                <button
                  className="btn"
                  onClick={(e) => {
                    onClickLogoutHandler(e);
                  }}
                >
                  Logout
                </button>
              </div>
            );
          } else {
            return (
              <button className="btn">
                <Link href="/login">Login</Link>
              </button>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default Navbar;
