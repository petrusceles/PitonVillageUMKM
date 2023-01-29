import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import { ToastContainer } from "react-toastify";
function dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
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

        // router.push("/dashboard");
      } catch (err) {
        toast.error(String(err));
        router.push("/");
      }
    };
    fetchUserData();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Dashboard />
    </>
  );
}

export default dashboard;
