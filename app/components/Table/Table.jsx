import React, { use, useContext, useEffect, useState } from "react";
import { MTable } from "./MTable";
import { AuthContext } from "@/app/store/auth-context";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";

export const Table = ({ section }) => {
  const [isLoading, setIsDataLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const dashCtx = useContext(DashboardContext);

  useEffect(() => {
    setIsDataLoading(true);
    authCtx.getAllStudents();
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
        <>{section === SECTION.DASH && <MTable />}</>
      )}
    </div>
  );
};
