"use client";

import React, { useContext, useEffect, useState } from "react";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";
import { ReportPB } from "./SectionReports/ReportPB";
import { ReportCT } from "./SectionReports/ReportCT";
import { ReportDD } from "./SectionReports/ReportDD";
import { BIForm } from "../BI/BIForm/BIForm";
import { ReportBI } from "./SectionReports/ReportBI";
import { BISection } from "../BISection/BISection";
import { BIQuestionContext } from "@/app/store/biquestion-context";
import { AuthContext } from "@/app/store/auth-context";
import { Table } from "../Table/Table";

export const DashView = ({ validBnum, completeStudentData }) => {
  const dashCtx = useContext(DashboardContext);
  const [viewState, setViewState] = useState(dashCtx.viewState);
  const [isStudentDetails, setIsStudentDets] = useState(dashCtx.studentDetails);
  const [isInterview, setIsInterview] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const biQctx = useContext(BIQuestionContext);
  const authCtx = useContext(AuthContext);

  const formSubmit = async (event, bNum) => {
    event.preventDefault();
    console.log(bNum);
    authCtx.getStudentInfo(bNum).then((r) => {
      if (r) {
        setIsInterview(true);
      } else {
        setIsInterview(false);
      }

      console.log(authCtx.studentInfo);
    });
  };

  useEffect(() => {
    console.log(validBnum);
    console.log(dashCtx.studentDetails);
    console.log(biQctx.studentInfo);
    setIsInterview(false);
    setViewState(dashCtx.viewState);
    setIsStudentDets(dashCtx.studentDetails);
  }, [dashCtx.viewState, dashCtx.studentDetails, validBnum, dashCtx.viewState]);

  return (
    <div className="flex h-full w-full justify-center px-4 pb-4 gap-2">
      {dashCtx.viewState === SECTION.DASH ? (
        <>
          <div className="flex w-full h-full justify-center items-center overflow-auto	overscroll-auto	">
            <Table section={SECTION.DASH} />
          </div>
        </>
      ) : (
        <>
          <>
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
                          <BIForm formSubmit={formSubmit} />
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
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
          </>
        </>
      )}
    </div>
  );
};
