import React, { useEffect, useState } from "react";
import UmkmPanelDeleteModal from "./UmkmPanelDeleteModal";
import Image from "next/image";
function UmkmPanelCard({
  id,
  name,
  owner,
  picture_url,
  category,
  editUmkmState,
  pageState,
}) {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const onClickDeleteHandler = (e) => {
    e.preventDefault;
    setShowConfirmationModal(true);
    pageState.setPage("Delete");
  };
  useEffect(() => {}, [showConfirmationModal]);
  return (
    <div className="w-full flex justify-center">
      {(() => {
        if (showConfirmationModal) {
          return (
            <UmkmPanelDeleteModal
              id={id}
              showConfirmationModalState={{
                showConfirmationModal,
                setShowConfirmationModal,
              }}
              pageState={pageState}
            />
          );
        }
      })()}
      <div className="w-full rounded-lg bg-white grid gap-4 drop-shadow-lg">
        <div className="w-full h-[200px] rounded-t-lg bg-slate-700 overflow-hidden">
          <Image
            src={picture_url}
            width={200}
            height={200}
            className="w-full h-full object-cover"
            alt={name}
          />
        </div>
        <div className="flex flex-wrap px-3 gap-2">
          <p className="font-semibold w-full ">{name}</p>
          <p className="text-xs w-full">{owner}</p>
          <p className="text-xs font-semibold">{category}</p>
        </div>
        <div className="px-3 grid-cols-2 grid w-full place-content-between pb-4 justify-between gap-4">
          <button
            className="rounded-md py-2 text-center cursor-pointer capitalize font-normal text-sm hover:bg-rose-800 transition ease-in-out duration-200 bg-rose-700 text-slate-50"
            onClick={(e) => {
              onClickDeleteHandler(e);
            }}
          >
            Delete
          </button>
          <button
            className="rounded-md py-2 capitalize font-normal text-sm hover:bg-emerald-600 transition ease-in-out duration-200 bg-emerald-700 text-slate-50"
            onClick={() => {
              editUmkmState.setEditUmkm(id);
              pageState.setPage("Edit");
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UmkmPanelCard;
