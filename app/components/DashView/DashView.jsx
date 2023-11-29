"use client";

import React, { useContext, useEffect, useState } from "react";
import { Table } from "../Table/Table";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";
import { ReportPB } from "./SectionReports/ReportPB";
import { ReportCT } from "./SectionReports/ReportCT";
import { ReportDD } from "./SectionReports/ReportDD";
import { BIForm } from "../BI/BIForm/BIForm";
import { ReportBI } from "./SectionReports/ReportBI";
import { BISection } from "../BISection/BISection";

export const DashView = ({ validBnum }) => {
  const dashCtx = useContext(DashboardContext);
  const [viewState, setViewState] = useState(dashCtx.viewState);
  const [isStudentDetails, setIsStudentDets] = useState(dashCtx.studentDetails);
  const [isInterview, setIsInterview] = useState(true);

  useEffect(() => {
    console.log(validBnum);
    console.log(dashCtx.studentDetails);
    setViewState(dashCtx.viewState);
    setIsStudentDets(dashCtx.studentDetails);
  }, [dashCtx.viewState, dashCtx.studentDetails, validBnum]);

  return (
    <div className="flex h-full w-full justify-center px-4 pb-4 gap-2">
      {viewState !== SECTION.BI ? (
        <>
          <div
            className={`bg-white h-full ${
              validBnum
                ? isStudentDetails !== null
                  ? "w-3/4"
                  : "w-full"
                : "w-full"
            } `}
          >
            <div className="h-full">
              {validBnum && isStudentDetails !== null && (
                <>
                  {viewState === SECTION.PB && (
                    <ReportPB
                      bingNumber={
                        isStudentDetails !== null
                          ? dashCtx.studentDetails.bingNumber
                          : ""
                      }
                    />
                  )}
                  {viewState === SECTION.CT && (
                    <ReportCT
                      bingNumber={
                        isStudentDetails !== null
                          ? dashCtx.studentDetails.bingNumber
                          : ""
                      }
                    />
                  )}
                  {viewState === SECTION.DD && (
                    <ReportDD
                      bingNumber={
                        isStudentDetails !== null
                          ? dashCtx.studentDetails.bingNumber
                          : ""
                      }
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {isInterview ? (
            <>
              <div className="bg-white h-full  w-full">
                <BISection />
              </div>
            </>
          ) : (
            <>
              {validBnum && isStudentDetails !== null ? (
                <>
                  <div className="bg-white h-full  w-3/4">
                    <ReportBI
                      bingNumber={
                        isStudentDetails !== null
                          ? dashCtx.studentDetails.bingNumber
                          : ""
                      }
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center">
                    <BIForm />
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
      {/* <div
        className={`bg-white h-full ${
          validBnum
            ? isStudentDetails !== null
              ? "w-3/4"
              : "w-full"
            : "w-full"
        } `}
      >
        <div className="h-full">
          {validBnum && isStudentDetails !== null && (
            <>
              {viewState === SECTION.PB && (
                <ReportPB
                  bingNumber={
                    isStudentDetails !== null
                      ? dashCtx.studentDetails.bingNumber
                      : ""
                  }
                />
              )}
              {viewState === SECTION.CT && (
                <ReportCT
                  bingNumber={
                    isStudentDetails !== null
                      ? dashCtx.studentDetails.bingNumber
                      : ""
                  }
                />
              )}
              {viewState === SECTION.DD && (
                <ReportDD
                  bingNumber={
                    isStudentDetails !== null
                      ? dashCtx.studentDetails.bingNumber
                      : ""
                  }
                />
              )}
            </>
          )}
        </div>
      </div> */}
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
    </div>
  );
};
