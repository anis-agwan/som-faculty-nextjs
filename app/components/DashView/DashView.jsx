"use client";

import React, { useContext, useEffect, useState } from "react";
import { Table } from "../Table/Table";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";
import { ReportPB } from "./SectionReports/ReportPB";
import { ReportCT } from "./SectionReports/ReportCT";
import { ReportDD } from "./SectionReports/ReportDD";

export const DashView = ({ validBnum }) => {
  const dashCtx = useContext(DashboardContext);
  const [viewState, setViewState] = useState(dashCtx.viewState);
  const [isStudentDetails, setIsStudentDets] = useState(dashCtx.studentDetails);

  useEffect(() => {
    console.log(validBnum);
    console.log(dashCtx.studentDetails);
    setViewState(dashCtx.viewState);
    setIsStudentDets(dashCtx.studentDetails);
  }, [dashCtx.viewState, dashCtx.studentDetails, validBnum]);

  return (
    <div className="flex h-full w-full justify-center px-4 pb-4 gap-2">
      <div
        className={`bg-white h-full ${
          validBnum
            ? isStudentDetails !== null
              ? "w-3/4"
              : "w-full"
            : "w-full"
        } `}
      >
        <div>
          {viewState === SECTION.PB && <ReportPB />}
          {viewState === SECTION.CT && <ReportCT />}
          {viewState === SECTION.DD && <ReportDD />}
        </div>
      </div>
      {validBnum && isStudentDetails !== null ? (
        <>
          <div className="h-full w-1/4 bg-white">
            <div className="flex flex-col px-4 pt-4">
              <div>
                <h1>Student details</h1>
              </div>
              <div>
                <p>{isStudentDetails.firstName}</p>
                <p>{isStudentDetails.lastName}</p>
                <p>{isStudentDetails.bingNumber}</p>
                <p>{isStudentDetails.emailId}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {/* {!(isStudentDetails === null) && validBnum ? (
        <>
          <div className="h-full w-1/4 bg-white">
            <div className="flex flex-col px-4 pt-4">
              <div>
                <h1>Student details</h1>
              </div>
              <div>
                <p>student.firstName</p>
                <p>student.lastName</p>
                <p>{isStudentDetails.email}</p>
                <p>student.bingNumber</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )} */}
    </div>
  );
};
