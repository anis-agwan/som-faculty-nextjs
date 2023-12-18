import React from "react";
import "./InviteButton.css";

export const InviteButton = ({ buttonTxt }) => {
  return (
    <div className="inviteBtn py-2 px-4 h-full flex justify-center items-center">
      <button className="flex justify-center items-center gap-1">
        {/* <Image src={searchLogo} alt="search" className="searchImage w-1/12" /> */}
        {buttonTxt}
      </button>
    </div>
  );
};
