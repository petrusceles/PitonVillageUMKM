import React from "react";
import bananaImage from "../public/icons/banana.png";
import Image from "next/image";
function ListTitle(props) {
  const onClickMenu = () => {
    props.isShowedStateManager.setIsShowed((prevIsShowed) => {
      return !prevIsShowed;
    });
  };
  return (
    <div
      className={`w-full bg-slate-100 py-4 hover:cursor-pointer items-center flex px-4 justify-between ${
        props.isShowedStateManager.isShowed ? "rounded-t-lg" : "rounded-lg"
      } duration-300 ease-in-out`}
      onClick={onClickMenu}
    >
      <div className="flex gap-2 items-center">
        <p className="font-semibold tracking-tight">Sale Pisang</p>
        <div className="relative">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute ${
              props.isShowedStateManager.isShowed ? "opacity-0" : "opacity-100"
            } duration-100 ease-in-out`}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
              fill="#0D0D0D"
            ></path>
          </svg>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              props.isShowedStateManager.isShowed ? "opacity-100" : "opacity-0"
            } duration-100 ease-in-out`}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071L12 9.41421L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L11.2929 7.29289Z"
              fill="#0D0D0D"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-[10%]">
        <Image src={bananaImage} alt={"Sale pisang"} loading={"eager"} />
      </div>
    </div>
  );
}

export default ListTitle;
