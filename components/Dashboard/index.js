// category_id: DataTypes.BIGINT,
// name: DataTypes.STRING,
// owner: DataTypes.STRING,
// logo_url: DataTypes.STRING,
// picture_url: DataTypes.STRING,
// coordinate: DataTypes.STRING,
// instagram_link: DataTypes.STRING,
// wa_link: DataTypes.STRING,
// map_link: DataTypes.STRING,
// facebook_link: DataTypes.STRING,
// twitter_link: DataTypes.STRING,
// content: DataTypes.TEXT,
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";
import UmkmPanel from "./UmkmPanel";
import CategoriesPanel from "./CategoriesPanel";
function Dashboard() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [panel, setPanel] = useState("Umkm");
  useEffect(() => {}, [panel]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-wrap ">
        <Header />
        <div className="w-full flex">
          <div className="w-[12%] bg-white drop-shadow-xl h-screen relative">
            <SidePanel panelState={{ panel, setPanel }} />
          </div>
          <div className="w-[88%]">
            {(() => {
              if (panel == "Umkm") {
                return (
                  <UmkmPanel companiesState={{ companies, setCompanies }} />
                );
              } else if (panel == "Categories") {
                return (
                  <CategoriesPanel
                    categoriesState={{ categories, setCategories }}
                  />
                );
              } else {
                return <div>Not Found</div>;
              }
            })()}
            {/* <UmkmPanel companiesState={{ companies, setCompanies }} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
