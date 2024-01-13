"use client";

import React, { useContext } from "react";
import "./SidePanel.css";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";

export const SidePanel = () => {
  const dashCtx = useContext(DashboardContext);

  const changeState = (section) => {
    console.log("IS STATE CHANGED? ");
    dashCtx.changeViewState(section);
  };

  const logginOut = () => {
    authCtx.onLogout();
    setIsLoggedIn(false);
    setMenuActive(false);
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-10 h-3/4 text-white justify-between">
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="portalTitle">ADMIN PANEL</h4>
        </div>
        <div>
          <h2 className="userTitle">Reema Devi</h2>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <button
            className="portalBtn"
            onClick={() => {
              changeState(SECTION.DASH);
            }}
          >
            Dashboard
          </button>
          <button
            className="portalBtn"
            onClick={() => {
              changeState(SECTION.PB);
            }}
          >
            Personal Beliefs
          </button>
          <button
            className="portalBtn"
            onClick={() => {
              changeState(SECTION.CT);
            }}
          >
            Critical Analysis
          </button>
          <button
            className="portalBtn"
            onClick={() => {
              changeState(SECTION.DD);
            }}
          >
            Difficult Decisions
          </button>
          <button
            className="portalBtn"
            onClick={() => {
              changeState(SECTION.BI);
            }}
          >
            Behavioral Interview
          </button>
        </div>
      </div>
      <div>
        <button
          className="portalBtn"
          onClick={() => {
            console.log("INVITE");
            changeState(SECTION.INVITE);
          }}
        >
          Manage Users
        </button>
      </div>
    </div>
  );
};
