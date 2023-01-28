import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../LoadingScreen";
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

function UmkmPanelAdd({ pageState }) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [umkmName, setUmkmName] = useState("");
  const [umkmOwner, setUmkmOwner] = useState("");
  const [umkmLogo, setUmkmLogo] = useState();
  const [umkmPicture, setUmkmPicture] = useState();
  const [umkmCoordinate, setUmkmCoordinate] = useState("");
  const [umkmInstagramLink, setUmkmInstagramLink] = useState(null);
  const [umkmWaLink, setUmkmWaLink] = useState(null);
  const [umkmMapLink, setUmkmMapLink] = useState(null);
  const [umkmFacebookLink, setUmkmFacebookLink] = useState(null);
  const [umkmTwitterLink, setUmkmTwitterLink] = useState(null);
  const [umkmContent, setUmkmContent] = useState("");
  const [umkmCategoryId, setUmkmCategoryId] = useState();

  const [loading, setLoading] = useState(false);
  const onClickSaveHandler = async (e) => {
    e.preventDefault;
    try {
      const payload = new FormData();

      payload.append("name", umkmName);
      payload.append("owner", umkmOwner);
      payload.append("logo", umkmLogo);
      payload.append("picture", umkmPicture);
      payload.append("coordinate", umkmCoordinate);
      payload.append("instagram_link", umkmInstagramLink);
      payload.append("wa_link", umkmWaLink);
      payload.append("map_link", umkmMapLink);
      payload.append("facebook_link", umkmFacebookLink);
      payload.append("twitter_link", umkmTwitterLink);
      payload.append("content", umkmContent);
      payload.append("category_id", umkmCategoryId);
      setLoading(true);
      // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      // await sleep(1000);
      const addUmkmResponse = await axios.post(
        "http://localhost:3456/api/companies",
        payload
      );
      setLoading(false);
      console.log(addUmkmResponse);
      if (addUmkmResponse.status === 201) {
        console.log("berhasil daftar");

        pageState.setPage("List");
      }
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response.data.message;
      if (errorMessage) {
        toast.error(String(errorMessage));
      } else {
        toast.error(String(err));
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesListRequest = await axios.get(
          "http://localhost:3456/api/categories"
        );
        const categoriesListResponse = categoriesListRequest.data;
        if (categoriesListResponse.status) {
          let categoriesListData = categoriesListResponse.data.categories;
          categoriesListData = categoriesListData.map((e, i) => {
            return { id: e.id, name: e.name };
          });
          if (categoriesListData.length) {
            setCategoriesList(categoriesListData);
          }
        }
      } catch (err) {}
    };

    fetchCategories();
  }, []);

  useEffect(() => {}, [categoriesList, loading]);

  const onChangeUmkmNameHandler = (e) => {
    const value = e.target.value;
    setUmkmName(value);
  };
  const onChangeUmkmOwnerHandler = (e) => {
    const value = e.target.value;
    setUmkmOwner(value);
  };
  const onChangeUmkmLogoHandler = (e) => {
    const value = e.target.files[0];

    if (
      value.type !== "image/png" ||
      value.type !== "image/jpg" ||
      value.type !== "image/jpeg"
    ) {
      console.log("Should be an image");
    }

    setUmkmLogo(value);
  };
  const onChangeUmkmPictureHandler = (e) => {
    const value = e.target.files[0];

    if (
      value.type !== "image/png" ||
      value.type !== "image/jpg" ||
      value.type !== "image/jpeg"
    ) {
      console.log("Should be an image");
    }

    setUmkmPicture(value);
  };
  const onChangeUmkmCoordinateHandler = (e) => {
    const value = e.target.value;
    setUmkmCoordinate(value);
  };
  const onChangeUmkmInstagramLinkHandler = (e) => {
    const value = e.target.value;
    setUmkmInstagramLink(value);
  };
  const onChangeUmkmWaLinkHandler = (e) => {
    const value = e.target.value;
    setUmkmWaLink(value);
  };
  const onChangeUmkmMapLinkHandler = (e) => {
    const value = e.target.value;
    setUmkmMapLink(value);
  };
  const onChangeUmkmFacebookLinkHandler = (e) => {
    const value = e.target.value;
    setUmkmFacebookLink(value);
  };
  const onChangeUmkmTwitterLinkHandler = (e) => {
    const value = e.target.value;
    setUmkmTwitterLink(value);
  };
  const onChangeUmkmContentHandler = (e) => {
    const value = e.target.value;
    setUmkmContent(value);
  };
  const onChangeUmkmCategoryIdHandler = (e) => {
    const value = e.target.value;
    setUmkmCategoryId(value);
  };

  const requiredMark = <span className="text-red-400">*</span>;

  return (
    <>
      {(() => (loading ? <LoadingScreen /> : ""))()}

      <div className="w-full flex flex-wrap">
        <h1 className="font-bold text-xl">Tambah Umkm</h1>
        <div className="w-full py-6">
          <div className="bg-white w-full drop-shadow-lg">
            <form className="grid grid-cols-1 px-6 py-10 gap-6 w-[60%] min-w-[800px]">
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Nama Usaha{requiredMark}</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmNameHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Foto Usaha{requiredMark}</p>
                </div>
                <input
                  type="file"
                  placeholder="Type here"
                  className="file-input file-input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmPictureHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Kategori{requiredMark}</p>
                </div>
                <select
                  className="select select-bordered select-sm rounded-sm w-[75%]"
                  onChange={(e) => {
                    onChangeUmkmCategoryIdHandler(e);
                  }}
                >
                  <option disabled selected>
                    Pilih Kategori
                  </option>
                  {categoriesList.map((e, i) => {
                    return (
                      <option key={i} value={e.id}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Pemilik{requiredMark}</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmOwnerHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Foto Pemilik{requiredMark}</p>
                </div>
                <input
                  type="file"
                  placeholder="Type here"
                  className="file-input file-input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmLogoHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Koordinat Peta{requiredMark}</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmCoordinateHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Konten{requiredMark}</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="textarea rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmContentHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Link Google Maps{requiredMark}</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmMapLinkHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Link Facebook</p>
                </div>
                <input
                  type="textarea"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmFacebookLinkHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Link WA</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmWaLinkHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Link Instagram</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmInstagramLinkHandler(e);
                  }}
                />
              </div>
              <div className="flex flex-wrap w-full items-center">
                <div className="w-[25%]">
                  <p className="text-sm">Link Twitter</p>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-sm rounded-sm w-[75%] input-bordered"
                  onChange={(e) => {
                    onChangeUmkmTwitterLinkHandler(e);
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

export default UmkmPanelAdd;
