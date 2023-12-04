import React, { useContext, useEffect, useState } from "react";
import { useMemo } from "react";

import { AuthContext } from "@/app/store/auth-context";
import "react-data-grid/lib/styles.css";

import DataGrid from "react-data-grid";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";

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

  const setColsRows = async () => {};

  const columns = [
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "bnumber", name: "B#" },
    { key: "completed", name: "Assessment Complete" },
  ];

  let rows;

  if (dashCtx.viewState === SECTION.DASH) {
    rows = authCtx.allStudents;
  } else if (dashCtx.viewState === SECTION.PB) {
    rows = authCtx.pbStudents;
  } else if (dashCtx.viewState === SECTION.CT) {
    rows = authCtx.ctStudents;
  } else if (dashCtx.viewState === SECTION.DD) {
    rows = authCtx.ddStudents;
  }

  return (
    <div className="flex w-full">
      <DataGrid columns={columns} rows={rows} className="w-full" />
    </div>
  );
};
