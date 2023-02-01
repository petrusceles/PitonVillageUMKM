import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSelectedCertainCompany } from "../slices/selectedCertainCompanySlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Facebook from "./SocialMedia/Facebook";
import Wa from "./SocialMedia/Wa";
import GMaps from "./SocialMedia/GMaps";
import Twitter from "./SocialMedia/Twitter";
import Instagram from "./SocialMedia/Instagram";
const socialMediaComponents = {
  wa_link: <Wa />,
  facebook_link: <Facebook />,
  twitter_link: <Twitter />,
  map_link: <GMaps />,
  instagram_link: <Instagram />,
};
const acceptedSocialMedia = [
  "wa_link",
  "facebook_link",
  "instagram_link",
  "map_link",
  "instagram_link",
];
function Company() {
  //   let socialMedia;
  const selectedCertainCompanySelector = useSelector(
    selectSelectedCertainCompany
  );
  const [socialMedia, setSocialMedia] = useState({});

  const router = useRouter();
  useEffect(() => {
    let socialMediaTemp = {};
    if (
      Object.keys(selectedCertainCompanySelector.selectedCertainCompany)
        .length === 0 &&
      selectedCertainCompanySelector.selectedCertainCompany.constructor ===
        Object
    ) {
    }
    for (let prop in selectedCertainCompanySelector.selectedCertainCompany) {
      // console.log(
      //   selectedCertainCompanySelector.selectedCertainCompany[prop] != 'null'
      // );
      // console.log(
      //   selectedCertainCompanySelector.selectedCertainCompany[prop]
      // );
      // console.log(
      //   selectedCertainCompanySelector.selectedCertainCompany[prop] != null
      // );
      // console.log(
      //   !selectedCertainCompanySelector.selectedCertainCompany[prop]
      // );
      if (
        acceptedSocialMedia.includes(prop) &&
        selectedCertainCompanySelector.selectedCertainCompany[prop] &&
        selectedCertainCompanySelector.selectedCertainCompany[prop] != null &&
        selectedCertainCompanySelector.selectedCertainCompany[prop] != undefined && 
        selectedCertainCompanySelector.selectedCertainCompany[prop] != 'null'
      ) {
        socialMediaTemp[prop] =
          selectedCertainCompanySelector.selectedCertainCompany[prop];
      }
    }
    setSocialMedia(socialMediaTemp);
    console.log(socialMediaTemp);
  }, [selectedCertainCompanySelector]);

  return (
    <div className="container mx-auto">
      <div className="w-full justify-center flex overflow-hidden rounded-lg flex-wrap">
        <div className="flex justify-center w-full h-48 relative overflow-hidden rounded-lg">
          <Image
            src={
              selectedCertainCompanySelector.selectedCertainCompany.picture_url
            }
            layout="fill"
            objectFit="cover"
            alt={selectedCertainCompanySelector.selectedCertainCompany.name}
          />
        </div>
        <div className="w-full pt-6 flex">
          <p className="tracking-tight text-justify font-bold text-2xl uppercase">
            {selectedCertainCompanySelector.selectedCertainCompany.name}
          </p>
        </div>
        <div className="w-full py-4">
          <div className="w-full rounded-md">
            <p className="tracking-tight text-justify">
              {selectedCertainCompanySelector.selectedCertainCompany.content}
            </p>
          </div>
        </div>
        <div className="w-full flex-wrap py-4 gap-4 flex">
          <div className="w-full">
            <div className="flex justify-center w-[100px] max-h-44 h-32 relative overflow-hidden rounded">
              <Image
                src={
                  selectedCertainCompanySelector.selectedCertainCompany.logo_url
                }
                layout="fill"
                objectFit="cover"
                alt={
                  selectedCertainCompanySelector.selectedCertainCompany.owner
                }
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap content-end">
            <div className="flex h-fit flex-wrap w-full">
              <p className="text-center">
                {selectedCertainCompanySelector.selectedCertainCompany.owner}
              </p>
            </div>
            <p className="pt-1">
              Pemilik{" "}
              <span className="font-semibold">
                {selectedCertainCompanySelector.selectedCertainCompany.name}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex gap-2 flex-wrap items-center">
          {/* {(()=> {
            for (const key in socialMedia) {
              if (Object.hasOwnProperty.call(socialMedia, key)) {
                const element = socialMedia[key];
                
              }
            }
          })} */}
          <div className="w-full flex justify-center">
            <p className="font-bold text-lg">Get in touch </p>
          </div>
          <div className="w-full flex gap-5 flex-wrap justify-center items-center ">
            {(() => {
              let socialMediaArray = [];
              for (const key in socialMedia) {
                if (Object.hasOwnProperty.call(socialMedia, key)) {
                  socialMediaArray.push(
                    <a href={socialMedia[key]} target="_blank">
                      {socialMediaComponents[key]}
                    </a>
                  );
                }
              }
              return socialMediaArray;
            })()}
            {/* <a href={"https://en.wikipedia.org/wiki/Next.js"}>
              <Wa />
            </a>
            <GMaps />
            <Twitter />
            <Facebook /> */}
          </div>
        </div>
        {/* <div className="w-full font-semibold">
          {selectedCertainCompanySelector.selectedCertainCompany.name}
        </div> */}

        {/* <div className="flex w-full flex-wrap gap-4 py-5">
          {(() => {
            let socialMediaComponent = [];
            for (const key in socialMedia) {
              if (Object.hasOwnProperty.call(socialMedia, key)) {
                const element = socialMedia[key];
                const svgIcon = socialMediaIcons[key];
                if (element) {
                  socialMediaComponent.push(
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={element}
                    >
                      {svgIcon}
                    </Link>
                  );
                }
              }
            }
            return socialMediaComponent;
          })()}
        </div> */}
      </div>
    </div>
  );
}

export default Company;
