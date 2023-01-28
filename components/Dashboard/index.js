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
import { useState } from "react";
import Header from "./Header";
import UmkmPanel from "./UmkmPanel";
import SidePanel from "./SidePanel";
import UmkmPanelDeleteModal from "./UmkmPanelDeleteModal";
function Dashboard() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [companies, setCompanies] = useState([]);
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
      <div className="flex flex-wrap">
        <Header />
        <div className="w-full flex">
          <div className="w-[12%]">
            <SidePanel />
          </div>
          <div className="w-[88%]">
            <UmkmPanel companiesState={{ companies, setCompanies }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
