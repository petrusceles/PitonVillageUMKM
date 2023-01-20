import React from "react";
import { useEffect, useState } from "react";
import ListMenu from "./ListMenu";
import ListTitle from "./ListTitle";
function ListSection({ category }) {
  const [isShowed, setIsShowed] = useState(false);
  const companies = category.companies;
  console.log(companies);
  let ListMenuMapping = [];
  for (const e of companies) {
    // console.log(e.name);
    ListMenuMapping.push(
      <ListMenu name={e.name} key={e.id} companyId={e.id} />
    );
  }
  useEffect(() => {}, [isShowed]);
  return (
    <div className="rounded-lg hover:shadow-lg duration-300 ease-in-out w-full relative">
      <ListTitle
        isShowedStateManager={{ isShowed, setIsShowed }}
        name={category.name}
        pictureUrl={category.picture_url}
      />
      <div
        className={`overflow-hidden w-full  flex duration-300 ease-in-out ${
          isShowed ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`w-full text-sm rounded-b-lg gap-5 py-4 flex flex-wrap px-4 bg-slate-50`}
        >
          {ListMenuMapping}
          {/* {ListMenuMappingFunction()} */}
        </div>
      </div>
    </div>
  );
}

export default ListSection;
