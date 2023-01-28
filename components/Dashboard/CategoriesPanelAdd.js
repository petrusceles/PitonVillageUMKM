import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../LoadingScreen";

function CategoriesPanelAdd({ pageState }) {
  //   const [categoriesList, setCategoriesList] = useState([]);
  const [categoriesName, setCategoriesName] = useState("");
  const [categoriesPicture, setCategoriesPicture] = useState();
  const [categoriesIcon, setCategoriesIcon] = useState();

  const [loading, setLoading] = useState(false);

  const onClickSaveHandler = async (e) => {
    e.preventDefault;
    try {
      const payload = new FormData();

      payload.append("name", categoriesName);
      payload.append("picture", categoriesPicture);
      payload.append("icon", categoriesIcon);
      setLoading(true);
      // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      // await sleep(1000);
      const addCategoriesRequest = await axios.post(
        "http://localhost:3456/api/categories",
        payload
      );
      setLoading(false);
      console.log(addCategoriesRequest);
      const addCategoriesResponse = addCategoriesRequest.data;
      if (addCategoriesResponse.status) {
        // console.log("berhasil daftar");
        toast.success("category added");
        pageState.setPage("List");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(String(err));
    }
  };

  useEffect(() => {}, [loading]);

  const onChangeCategoriesNameHandler = (e) => {
    const value = e.target.value;
    setCategoriesName(value);
  };
  const onChangeCategoriesPictureHandler = (e) => {
    const value = e.target.files[0];

    if (
      value.type !== "image/png" ||
      value.type !== "image/jpg" ||
      value.type !== "image/jpeg"
    ) {
      console.log("Should be an image");
    }

    setCategoriesPicture(value);
  };
  const onChangeCategoriesIconHandler = (e) => {
    const value = e.target.files[0];

    if (
      value.type !== "image/png" ||
      value.type !== "image/jpg" ||
      value.type !== "image/jpeg"
    ) {
      console.log("Should be an image");
    }

    setCategoriesIcon(value);
  };

  const requiredMark = <span className="text-red-400">*</span>;

  return (
    <>
      {(() => (loading ? <LoadingScreen /> : ""))()}

      <div className="w-full flex flex-wrap h-fit">
        <h1 className="font-bold text-xl">Tambah Kategori</h1>
        <div className="w-full py-6">
          <div className="bg-white w-full drop-shadow-lg">
            <form className="grid grid-cols-1 px-6 py-10 gap-6 w-[60%] min-w-[800px]">
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Nama Kategori{requiredMark}</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeCategoriesNameHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Foto Kategori{requiredMark}</p>
                </div>
                <input
                  type="file"
                  placeholder="Type here"
                  className="file-input file-input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeCategoriesPictureHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Icon{requiredMark}</p>
                </div>
                <input
                  type="file"
                  placeholder="Type here"
                  className="file-input file-input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeCategoriesIconHandler(e);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <button
            className="btn btn-error rounded-sm"
            onClick={() => {
              pageState.setPage("List");
            }}
          >
            Cancel
          </button>
          <button
            className="btn btn-success rounded-sm"
            onClick={(e) => {
              onClickSaveHandler(e);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default CategoriesPanelAdd;
