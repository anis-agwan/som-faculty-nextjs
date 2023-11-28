"use client";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./auth-context";

export const ReportContext = createContext({
  graphState: null,
  changeGraphState: () => {},
  getPBGraphData: () => {},
  getCTGraphData: () => {},
  getDDGraphData: () => {},
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

  const gettingDDGraphData = async (bingNumber) => {
    try {
      const rankRes = await fetch(
        `${baseDDBI}:8443/situation_q/sq/getRankScores/${bingNumber}`
      );
      const rateRes = await fetch(
        `${baseDDBI}:8443/situation_q/sq/getRateScores/${bingNumber}`
      );

      let data = {};

      await rankRes.json().then((res) => {
        data["rankData"] = res;
      });

      await rateRes.json().then((res) => {
        data["rateData"] = res;
      });

      // console.log(data);

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
        getDDGraphData: gettingDDGraphData,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};
