"use client";

import React, { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./auth-context";
import { SECTION } from "../enums/section_enums";

export const DashboardContext = createContext({
  viewState: null,
  changeViewState: (section) => {},
  studentBNum: null,
  changeBNum: (bnum) => {},
  studentDetails: null,
  getStudentDetails: (bnum) => {},
});

export const DashboardContextProvider = ({ children }) => {
  const baseLogInUrl = "http://3.13.110.40:8080/login-register/login/getUser";
  const [currentViewState, setCurrViewState] = useState(SECTION.DASH);
  const [bNum, setBNum] = useState(null);
  const [details, setStudentDetails] = useState(null);

  const changingViewState = (section) => {
    setCurrViewState(section);
  };

  const changingBNum = (bnum) => {
    console.log(bnum);
    setBNum(bnum);
  };

  const getUserDets = async (bnumber) => {
    const url = `${baseLogInUrl}/${bnumber}`;

    let data = {};
    if (bnumber !== "") {
      try {
        const res = await fetch(url);
        await res
          .json()
          .then((res) => {
            if (res.validationIndicator === "Valid") {
              setStudentDetails(res);
            } else {
              throw new Error("Not a Valid student");
            }
          })
          .catch((er) => {
            console.log(er);
            alert(er);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      setStudentDetails(null);
    }

    return data;
  };

  return (
    <DashboardContext.Provider
      value={{
        viewState: currentViewState,
        changeViewState: changingViewState,
        studentBNum: bNum,
        changeBNum: changingBNum,
        studentDetails: details,
        getStudentDetails: getUserDets,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
