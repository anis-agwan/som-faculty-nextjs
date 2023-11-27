import React from "react";

import searchLogo from "./search-icon.svg";

import "./SearchButton.css";
import Image from "next/image";

export const SearchButton = ({ buttonTxt }) => {
  return (
    <div className="searchBtn w-full h-full flex justify-center items-center">
      <button className="flex justify-center items-center gap-1">
        <Image src={searchLogo} alt="search" className="searchImage w-1/12" />
        {buttonTxt}
      </button>
    </div>
  );
};
