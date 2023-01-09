import axios from "axios";
import List from "../components/List";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { addCategories } from "../slices/categoriesSlice";
import { Provider, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
export default function umkm() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCategoriesRequest = await axios.get(
          "http://localhost:2000/api/companies"
        );
        const currentCategoriesResponse = currentCategoriesRequest.data;
        console.log(currentCategoriesResponse);
        if (currentCategoriesResponse.status) {
          dispatch(
            addCategories({
              categories: currentCategoriesResponse.data.categories,
            })
          );

          setCategories(currentCategoriesResponse.data.categories);
        }
      } catch (err) {}
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      <Navbar />
      <Search />
      <List />
    </div>
  );
}
