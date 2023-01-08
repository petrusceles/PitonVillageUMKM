import { useEffect, useRef, useState } from "react";
import ListTitle from "./ListTitle";
function List() {
  const [isShowed, setIsShowed] = useState(false);

  const chevronRef = useRef();
  const menuRef = useRef();
  const menuListRef = useRef();

  useEffect(() => {
    console.log(isShowed);
  }, [isShowed]);

  return (
    <div className="px-5 flex-wrap flex justify-center text-lg py-4 gap-4">
      <div className="rounded-lg hover:shadow-lg duration-300 ease-in-out w-full relative">
        <ListTitle isShowedStateManager={{ isShowed, setIsShowed }} />
        <div
          className={`overflow-hidden w-full  flex duration-300 ease-in-out ${
            isShowed ? "max-h-96" : "max-h-0"
          }`}
        >
          <div
            className={`w-full text-sm rounded-b-lg gap-5 py-4 flex flex-wrap px-4 bg-slate-50`}
          >
            <div className="flex justify-between w-full">
              <p>Sale Pisang Mbak Asih</p>
              <input type={"checkbox"} className="checkbox checkbox-sm" />
            </div>
            <div className="flex justify-between w-full">
              <p>Sale Pisang Bu Narti</p>
              <input type={"checkbox"} className="checkbox checkbox-sm" />
            </div>
            <div className="flex justify-between w-full">
              <p>Sale Pisang Krajanwetan Jaya</p>
              <input type={"checkbox"} className="checkbox checkbox-sm" />
            </div>
            <div className="flex justify-between w-full">
              <p>Sale Pisang Mbak Asih</p>
              <input type={"checkbox"} className="checkbox checkbox-sm" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="rounded-lg hover:shadow-lg duration-300 ease-in-out relative">
        <div
          className=" w-full bg-slate-100 py-4 hover:cursor-pointer rounded-lg items-center flex px-4 justify-between"
          ref={menuRef}
        >
          <div className="flex gap-2 items-center">
            <p className="font-semibold tracking-tight">Sale Pisang</p>
            <div className="relative" ref={chevronRef}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
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
                className="opacity-0"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071L12 9.41421L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L11.2929 7.29289Z"
                  fill="#0D0D0D"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-[13%]">
            <Image src={bananaImage} alt={"Sale pisang"} loading={"eager"} />
          </div>
        </div>
        <div
          className="w-full text-sm rounded-b-lg gap-5 py-4 flex duration-1000 ease-in-out flex-wrap px-4 bg-slate-50 absolute top-0"
          ref={menuListRef}
        >
          <div className="flex justify-between w-full">
            <p>Sale Pisang Mbak Asih</p>
            <input type={"checkbox"} className="checkbox checkbox-sm" />
          </div>
          <div className="flex justify-between w-full">
            <p>Sale Pisang Bu Narti</p>
            <input type={"checkbox"} className="checkbox checkbox-sm" />
          </div>
          <div className="flex justify-between w-full">
            <p>Sale Pisang Krajanwetan Jaya</p>
            <input type={"checkbox"} className="checkbox checkbox-sm" />
          </div>
          <div className="flex justify-between w-full">
            <p>Sale Pisang Mbak Asih</p>
            <input type={"checkbox"} className="checkbox checkbox-sm" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default List;
