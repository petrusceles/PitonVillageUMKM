import { useEffect, useState } from "react";
import { selectCategories } from "../slices/categoriesSlice";
import { useSelector } from "react-redux";
import Link from "next/link";
import ListSection from "./ListSection";
function List() {
  let categoriesList = useSelector(selectCategories);
  const [categoriesListArray, setCategoriesListArray] = useState([]);
  // let ListMapping;

  const ListMapping = (categoriesListArray) => {
    const categories = categoriesListArray.map((e, i) => {
      return <ListSection category={e} key={i} />;
    });
    console.log(categoriesListArray);
    return categories;
  };

  useEffect(() => {
    setCategoriesListArray(categoriesList.categories);
    // console.log(categoriesListArray);

    // categoriesListArray.forEach((e, i) => {
    //   ListMapping.push(
    //     <p key={i} className="font-bold text-xl">
    //       Halo
    //     </p>
    //   );
    // });
    // for (const e of categoriesListArray) {
    //   // console.log(e);
    //   // ListMapping.push(<ListSection category={e} />);00
    //   ListMapping.push(<p className="font-bold text-xl">Halo</p>);
    // }
    // console.log(ListMapping);
  }, [categoriesList]);
  return (
    <div className="px-5 flex-wrap flex justify-end text-lg py-4 gap-4">
      {ListMapping(categoriesListArray)}
      <button className="btn justify-items-end">
        <Link href="/map" className="capitalize font-normal">Tampilkan</Link>
      </button>
      {/* <p>Halo</p> */}
    </div>
  );
}

export default List;
