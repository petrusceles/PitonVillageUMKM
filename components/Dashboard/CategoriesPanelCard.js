import React from "react";
import CategoriesPanelDeleteModal from "./CategoriesPanelDeleteModal";
import { useState, useEffect } from "react";

function CategoriesPanelCard({ name, pageState, editCategoriesState, id }) {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const onClickDeleteHandler = (e) => {
    e.preventDefault;
    setShowConfirmationModal(true);
    pageState.setPage("Delete");
  };
  useEffect(() => {}, [showConfirmationModal]);

  const onClickEditHandler = (e) => {
    e.preventDefault;
    pageState.setPage("Edit");
    editCategoriesState.setEditCategories(id);
  };
  return (
    <div className="p-3 text-base rounded-lg w-full bg-white drop-shadow-md flex items-center gap-2">
      {(() => {
        if (showConfirmationModal) {
          return (
            <CategoriesPanelDeleteModal
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
      <p className="w-1/2">{name}</p>
      <div className="w-1/2 flex justify-end gap-2">
        <button className="btn btn-sm" onClick={(e) => onClickEditHandler(e)}>
          Edit
        </button>
        <button
          className="btn btn-sm"
          onClick={(e) => {
            onClickDeleteHandler(e);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CategoriesPanelCard;
