import React, { useContext, useEffect, useState } from "react";
import { useMemo } from "react";

import { AuthContext } from "@/app/store/auth-context";
import "react-data-grid/lib/styles.css";

import DataGrid from "react-data-grid";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";
import { useSelector } from "react-redux";

const data = [
  {
    name: "Ani Rud",
    email: "ani@binghamton.edu",
    bnumber: "B12341234",
    completed: "Yes",
  },
];

export const MTable = ({ allStudentsData }) => {
  const authCtx = useContext(AuthContext);
  const dashCtx = useContext(DashboardContext);
  const allCompStudents = useSelector((state) => state.manageUser.allCompleteStudents);
  const pbStudents = useSelector((state) => state.manageUser.pbStudents);
  const ctStudents = useSelector((state) => state.manageUser.ctStudents);
  const ddStudents = useSelector((state) => state.manageUser.ddStudents);
  // console.log(allStudentsData);
  const columns = [
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "bnumber", name: "B#" },
    { key: "completed", name: "All Quizes Completed" },
  ];

  const columns1 = [
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "bnumber", name: "B#" },
    { key: "completed", name: "PB Quiz Completed" },
  ];

  const columns2 = [
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "bnumber", name: "B#" },
    { key: "completed", name: "CA Quiz Completed" },
  ];

  const columns3 = [
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "bnumber", name: "B#" },
    { key: "completed", name: "DD Quiz Completed" },
  ];

  const newCols = [
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "bnumber", name: "B#" },
    { key: "pbcompleted", name: "PB Quiz" },
    { key: "cacompleted", name: "CA Quiz" },
    { key: "ddcompleted", name: "DD Quiz" },
  ];

  let rows;
  let cols;
  let tagLine;

  if (dashCtx.viewState === SECTION.DASH) {
    // console.log(allCompStudents);
    rows = allCompStudents;
    cols = columns;
    tagLine = " all the quizes and behavioral interview.";
  } else if (dashCtx.viewState === SECTION.PB) {
    rows = pbStudents;
    cols = newCols;
    tagLine = " Personal Belief Quiz";
  } else if (dashCtx.viewState === SECTION.CT) {
    rows = ctStudents;
    cols = newCols;
    tagLine = " Critical Analysis Quiz";
  } else if (dashCtx.viewState === SECTION.DD) {
    rows = ddStudents;
    cols = newCols;
    tagLine = " Difficult Decisions Quiz";
  }

  useEffect(() => {
    
  }, [allCompStudents]);

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-full gap-4">
        <div className="pt-2 flex flex-col justify-center w-full">
          <h1 className=" px-6 ">
            {" "}
            List of students who have completed <b>{tagLine}</b>
          </h1>
          <h2 className="px-6">
            (PB = Personal Beliefs, CA = Critical Analyses, DD = Difficult
            Decisions)
          </h2>
          <h2 className="px-6">
            (Yes = Quiz Completed & No = Quiz Not Completed)
          </h2>
        </div>
        <DataGrid columns={cols} rows={rows} className="w-full h-full" />
      </div>
    </div>
  );
};
