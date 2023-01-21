import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import axios from "axios";
import List from "../components/List";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { addCategories } from "../slices/categoriesSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCategoriesRequest = await axios.get(
          "http://localhost:3000/api/categories"
        );
        const currentCategoriesResponse = currentCategoriesRequest.data;
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
    <div className="bg-[url('/images/front.jpg')] h-screen w-screen bg-cover overflow-hidden">
      <div className="container mx-auto max-w-2xl">
        <Navbar />
        <Search />
        <List />
      </div>
    </div>
  );
}
