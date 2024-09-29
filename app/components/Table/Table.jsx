import React, { use, useContext, useEffect, useState } from "react";
import { MTable } from "./MTable";
import { AuthContext } from "@/app/store/auth-context";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "@/app/redux-store/manageUser/manageUser-actions";

export const Table = ({ section }) => {
  const [isLoading, setIsDataLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const dashCtx = useContext(DashboardContext);  

  useEffect(() => {
    setIsDataLoading(true);
    // authCtx.getAllStudents();
    setIsDataLoading(false);
  }, [dashCtx.viewState]);

  return (
    <div className="w-full h-full max-h-screen overflow-y-auto flex flex-col flex-grow ">
      {isLoading ? (
        <>
          <div className="flex justify-center items-center h-full w-full">
            Loading...
          </div>
        </>
      ) : (
        <>
          {section === SECTION.DASH && <MTable />}{" "}
          {section === SECTION.PB && <MTable />}{" "}
          {section === SECTION.CT && <MTable />}{" "}
          {section === SECTION.DD && <MTable />}
        </>
      )}
    </div>
  );
};
