"use client";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./auth-context";

export const ReportContext = createContext({
  graphState: null,
  changeGraphState: () => {},
  getPBGraphData: () => {},
  getCTGraphData: () => {},
});

export const ReportContextProvider = ({ children }) => {
  const basePBCT = "http://3.14.232.42";
  const baseDDBI = "http://3.14.159.174";
  const [stateOfGraph, setGraphState] = useState(null);

  const changingState = (section) => {
    // console.log(stateOfGraph);
    setGraphState(section);
  };

  const gettingPBGraphData = async (bingNumber) => {
    try {
      const res = await fetch(
        `${basePBCT}:8441/personal-beliefs/pb/getScores/${bingNumber}`
      );

      let data = {};

      await res
        .json()
        .then((rdata) => {
          // console.log(rdata);
          data = rdata;
        })
        .catch((err) => {
          throw new Error(err);
        });

      // return res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const gettingCTGraphData = async (bingNumber) => {
    try {
      const res = await fetch(
        `${basePBCT}:8442/critical-thinking/critical-thinking/getScores/${bingNumber}`
      );
      console.log(res);
      let data = {};
      await res
        .json()
        .then((r) => {
          console.log(r);
          data = r;
        })
        .catch((err) => {
          throw new Error(err);
        });

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ReportContext.Provider
      value={{
        graphState: stateOfGraph,
        changeGraphState: changingState,
        getPBGraphData: gettingPBGraphData,
        getCTGraphData: gettingCTGraphData,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};
