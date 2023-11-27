import React from "react";
import "./SidePanel.css";

export const SidePanel = () => {
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
          <button className="portalBtn">Dashboard</button>
          <button className="portalBtn">Personal Beliefs</button>
          <button className="portalBtn">Critical Analysis</button>
          <button className="portalBtn">Difficult Decisions</button>
          <button className="portalBtn">Behavioral Interview</button>
        </div>
      </div>
      <div>
        <button className="portalBtn">Logout</button>
      </div>
    </div>
  );
};
