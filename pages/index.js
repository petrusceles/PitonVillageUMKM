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
import { toast } from "react-toastify";
import { addUser } from "../slices/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCategoriesRequest = await axios.get(
          `${process.env.API_URL}/api/percategories`
        );
        const currentCategoriesResponse = currentCategoriesRequest.data;
        if (currentCategoriesResponse.status) {
          dispatch(
            addCategories({
              categories:
                currentCategoriesResponse.data.companies_per_categories,
            })
          );

          setCategories(
            currentCategoriesResponse.data.companies_per_categories
          );
        }
      } catch (err) {}
    };

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        const currentUserRequest = await axios.get(
          `${process.env.API_URL}/api/auth/me`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;
        if (currentUserResponse.status) {
          dispatch(
            addUser({
              user: currentUserResponse.data.user,
              token,
            })
          );
        }
        // console.log(currentUserResponse);
      } catch (err) {
        toast.error(String(err));
      }
    };
    fetchUserData();
    fetchData();
  }, []);
  return (
    <div className="bg-[url('/images/front.jpg')] h-screen w-screen bg-cover overflow-hidden bg-scroll">
      <div className="container mx-auto max-w-2xl">
        <Navbar />
        <Search />
        <List />
      </div>
    </div>
  );
}
