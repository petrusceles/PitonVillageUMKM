import { useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import LoadingScreen from "../components/LoadingScreen";
export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  const [loading, setLoading] = useState(false);

  const notificationRef = useRef(null);

  const usernameHandler = (event) => {
    const usernameInput = event.target.value;
    setUsername(usernameInput);
  };

  const passwordHandler = (event) => {
    const passwordInput = event.target.value;
    console.log(process.env.API_URL);
    setPassword(passwordInput);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const requestBody = {
        username,
        password,
      };
      const response = await axios.post(
        `${process.env.API_URL}/api/auth/login`,
        requestBody
      );
      localStorage.setItem("token", response.data.data.token);
      setLoading(false);
      router.push("/");
    } catch (err) {
      setLoading(false);
      let finalMessage = "";
      console.log(typeof err?.response?.data);
      if (err?.response?.data != undefined) {
        const responseMessage = err.response.data.message;
        if (Array.isArray(responseMessage)) {
          responseMessage.forEach((e) => {
            finalMessage += ` ${e.message}`;
          });
        } else {
          finalMessage = responseMessage;
        }
      }
      finalMessage = String(err);
      console.log(err);
      setNotification(finalMessage);
      notificationRef.current.classList.remove("hidden");
      router.push("/login");
    }
  };

  return (
    <>
      {(() => (loading ? <LoadingScreen /> : ""))()}
      <div className="flex h-screen flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full flex items-center justify-center px-40 py-16 lg:p-72 lg:bg-green-300">
          <h1 className="lg:text-8xl xl:text-9xl lg:font-medium text-7xl font-medium mx-auto text-center lg:text-left text-slate-800">
            UMKM Desa Piton
          </h1>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
          <form className="grid grid-cols-1 gap-4 p-6 lg:w-7/12  w-1/2 shadow bg-slate-50">
            <input
              placeholder="Username"
              className="py-2 px-3 text-lg bg-slate-100 rounded-md"
              type={"email"}
              onChange={(event) => usernameHandler(event)}
            />
            <input
              placeholder="Password"
              className="py-2 px-3 text-lg bg-slate-100 rounded-md"
              type={"password"}
              onChange={(event) => passwordHandler(event)}
            />
            <p
              className="justify-self-center hidden text-red-500"
              ref={notificationRef}
            >
              {notification}
            </p>
            <button
              className="bg-green-300 text-slate-800 py-2 px-3 text-xl font-semibold rounded-md focus:bg-green-200 ease-in-out duration-100"
              onClick={(event) => loginHandler(event)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
