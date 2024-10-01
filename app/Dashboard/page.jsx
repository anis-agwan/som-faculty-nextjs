"use client";

import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { DashView } from "../components/DashView/DashView";
import { SearchStudent } from "../components/SearchStudent/SearchStudent";
import { DashboardContext } from "../store/dashboard-context";
import { AuthContext } from "../store/auth-context";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const dashCtx = useContext(DashboardContext);
  const [bNum, setBNum] = useState("");
  const [isBNumValid, setBNumValid] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  !isLoggedIn && redirect("/");

  const bNumChangeHandler = (event) => {
    event.preventDefault();
    var regexConst = /^B\d{8}$/;

    if (regexConst.test(event.target.value)) {
      // console.log(event.target.value);
      setBNumValid(true);
      setBNum(event.target.value);
      dashCtx.changeBNum(event.target.value);
    } else {
      setBNumValid(false);
      setBNum("");
      dashCtx.changeBNum("");
      dashCtx.getStudentDetails("");
    }
  };

  const submitBNum = async (bNum) => {
    // console.log(isBNumValid);
    // console.log(bNum);

    dashCtx.getStudentDetails(bNum).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    console.log(dashCtx.viewState);
    // console.log(completeStudentData);
    // if (!authCtx.isLoggedIn) {
    //   console.log(authCtx.isLoggedIn);
    //   redirect("/");
    // }
  }, [isBNumValid]);

  return (
    <div className="flex items-center h-screen text-black pt-10">
      <div className="flex flex-col justify-center w-1/5 bg-side-panel-grey h-full px-5">
        <SidePanel />
      </div>
      <div className="w-4/5 h-full">
        <div className="flex flex-col h-full justify-center pt-2">
          <div className="h-1/6">
            <SearchStudent
              bNum={bNum}
              bNumChangeHandler={bNumChangeHandler}
              validBnum={isBNumValid}
              onSubmit={submitBNum}
            />
          </div>
          <div className="h-5/6 ">
            <DashView
              validBnum={isBNumValid}
              // completeStudentData={completeStudentData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
