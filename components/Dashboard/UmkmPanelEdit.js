import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "../LoadingScreen";
import { useRouter } from "next/router";
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

function UmkmPanelEdit({ pageState, editUmkmState }) {
  const router = useRouter();
  const [categoriesList, setCategoriesList] = useState([]);
  const [umkmName, setUmkmName] = useState(undefined);
  const [umkmOwner, setUmkmOwner] = useState(undefined);
  const [umkmLogo, setUmkmLogo] = useState(undefined);
  const [umkmPicture, setUmkmPicture] = useState(undefined);
  const [umkmCoordinate, setUmkmCoordinate] = useState(undefined);
  const [umkmInstagramLink, setUmkmInstagramLink] = useState(undefined);
  const [umkmWaLink, setUmkmWaLink] = useState(undefined);
  const [umkmMapLink, setUmkmMapLink] = useState(undefined);
  const [umkmFacebookLink, setUmkmFacebookLink] = useState(undefined);
  const [umkmTwitterLink, setUmkmTwitterLink] = useState(undefined);
  const [umkmContent, setUmkmContent] = useState(undefined);
  const [umkmCategoryId, setUmkmCategoryId] = useState(undefined);

  const [loading, setLoading] = useState(false);

  const umkmNameRef = useRef();
  const umkmOwnerRef = useRef();
  const umkmCoordinateRef = useRef();
  const umkmInstagramLinkRef = useRef();
  const umkmWaLinkRef = useRef();
  const umkmMapLinkRef = useRef();
  const umkmFacebookLinkRef = useRef();
  const umkmTwitterLinkRef = useRef();
  const umkmContentRef = useRef();
  const umkmCategoryIdRef = useRef();

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
      // console.log(umkmName);
      setLoading(true);
      // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      // await sleep(1000);
      // for (const value of payload.values()) {
      //   console.log(value);
      // }
      const token = localStorage.getItem("token");
      const editUmkmResponse = await axios.put(
        `${process.env.API_URL}/api/companies/${editUmkmState.editUmkm}`,
        payload,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      // console.log(editUmkmResponse);
      if (editUmkmResponse.status === 200) {
        // console.log("berhasil daftar");

        pageState.setPage("List");
      }
    } catch (err) {
      setLoading(false);
      // console.log(err.response.status);
      if (err.response.status == 401) {
        toast.error("you need to login first");
        router.push('login')
      }
      toast.error(String(err));
    }
  };

  // const [umkmData, setUmkmData] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesListRequest = await axios.get(
          `${process.env.API_URL}/api/categories`
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
      } catch (err) {
        toast.error(String(err));
      }
    };

    const fetchUmkmData = async () => {
      try {
        const companyRequest = await axios.get(
          `${process.env.API_URL}/api/companies/${editUmkmState.editUmkm}`
        );
        const companyResponse = companyRequest.data;
        if (companyResponse.status) {
          umkmNameRef.current.value = companyResponse.data.company.name;
          setUmkmName(companyResponse.data.company.name);

          umkmOwnerRef.current.value = companyResponse.data.company.owner;
          setUmkmOwner(companyResponse.data.company.owner);

          umkmCoordinateRef.current.value =
            companyResponse.data.company.coordinate;
          setUmkmCoordinate(companyResponse.data.company.coordinate);

          umkmInstagramLinkRef.current.value =
            companyResponse.data.company.instagram_link;
          setUmkmInstagramLink(companyResponse.data.company.instagram_link);

          umkmWaLinkRef.current.value = companyResponse.data.company.wa_link;
          setUmkmWaLink(companyResponse.data.company.wa_link);

          umkmMapLinkRef.current.value = companyResponse.data.company.map_link;
          setUmkmMapLink(companyResponse.data.company.map_link);

          umkmFacebookLinkRef.current.value =
            companyResponse.data.company.facebook_link;
          setUmkmFacebookLink(companyResponse.data.company.facebook_link);

          umkmTwitterLinkRef.current.value =
            companyResponse.data.company.twitter_link;
          setUmkmTwitterLink(companyResponse.data.company.twitter_link);

          umkmContentRef.current.value = companyResponse.data.company.content;
          setUmkmContent(companyResponse.data.company.content);

          umkmCategoryIdRef.current.value =
            companyResponse.data.company.category_id;
          setUmkmCategoryId(companyResponse.data.company.category_id);
          // console.log(companyResponse);
        }
      } catch (err) {
        toast.error(String(err));
      }
    };

    fetchCategories();
    fetchUmkmData();
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
      toast.error("Should be an image");
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
      toast.error("Should be an image");
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
                  ref={umkmNameRef}
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
                  // ref={}
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
                  ref={umkmCategoryIdRef}
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
                  ref={umkmOwnerRef}
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
                  // ref={}
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
                  ref={umkmCoordinateRef}
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
                  ref={umkmContentRef}
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
                  ref={umkmMapLinkRef}
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
                  ref={umkmFacebookLinkRef}
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
                  ref={umkmWaLinkRef}
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
                  ref={umkmInstagramLinkRef}
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
                  ref={umkmTwitterLinkRef}
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

export default UmkmPanelEdit;
