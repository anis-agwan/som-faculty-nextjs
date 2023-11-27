import React from "react";
import "./Dashboard.css";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { DashView } from "../components/DashView/DashView";
import { SearchStudent } from "../components/SearchStudent/SearchStudent";

export default function Dashboard() {
  return (
    <div className="flex items-center h-screen text-black pt-10">
      <div className="flex flex-col justify-center w-1/5 bg-side-panel-grey h-full px-5">
        <SidePanel />
      </div>
      <div className="w-4/5 h-full">
        <div className="flex flex-col h-full justify-center pt-2">
          <div className="h-1/6">
            <SearchStudent />
          </div>
          <div className="h-5/6">DashView</div>
        </div>
      </div>
    </div>
  );
}
