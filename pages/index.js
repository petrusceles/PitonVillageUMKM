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
import LoadingScreen from "../components/LoadingScreen";
export default function Home() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const currentCategoriesRequest = await axios.get(
          `${process.env.API_URL}/api/percategories`
        );
        setLoading(false);
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
        } else {
          localStorage.removeItem("token");
        }

        // console.log(currentUserResponse);
      } catch (err) {
        toast.error(String(err));
        localStorage.removeItem("token");
      }
    };
    fetchUserData();
    fetchData();
  }, []);
  return (
    <>
      {(() => (loading ? <LoadingScreen /> : ""))()}
      <div className="bg-slate-100 h-screen w-screen bg-cover overflow-hidden bg-scroll">
        <div className="container mx-auto max-w-2xl">
          <Navbar />
          <List />
        </div>
      </div>
    </>
  );
}
