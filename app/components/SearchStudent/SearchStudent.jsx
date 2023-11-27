import React from "react";
import "./SearchStudent.css";
import { SearchButton } from "../Buttons/SearchButtons/SearchButton";

export const SearchStudent = () => {
  return (
    <div className="pt-6 px-4 h-full">
      <div className="flex gap-4 h-full pt-3">
        <div className="w-3/4">
          <input
            className="searchBox w-full h-1/2 px-2"
            type="text"
            placeholder="Please enter Student's B-Number"
          ></input>
        </div>
        <div className="flex justify-center items-center h-1/2 w-1/4">
          <SearchButton buttonTxt={"Search Student Reports"} />
        </div>
      </div>
    </div>
  );
};
