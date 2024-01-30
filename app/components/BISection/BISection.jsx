import React, { useContext, useEffect } from "react";
import { BICard } from "../BICard/BICard";
import { BI_SECTION } from "@/app/enums/bi_section_enums";
import Link from "next/link";
import { DashboardContext } from "@/app/store/dashboard-context";
import { AuthContext } from "@/app/store/auth-context";

const cardInfo = [
  {
    className: "s1Card",
    section: BI_SECTION.SIMULTAION1,
    imageSrc: {
      src: "./situation1.jpg",
      alt: "Simulation 1",
    },
    title: "Simulation 1",
  },
  {
    className: "s2Card",
    section: BI_SECTION.SIMULATION2,
    imageSrc: {
      src: "./situation2.jpg",
      alt: "Simulation 2",
    },
    title: "Simulation 2",
  },
  {
    className: "e1Card",
    section: BI_SECTION.EVALUATION1,
    imageSrc: {
      src: "./evaluation1.jpg",
      alt: "Evaluation 1",
    },
    title: "Evaluation 1",
  },
  {
    className: "e2Card",
    section: BI_SECTION.EVALUATION2,
    imageSrc: {
      src: "./evaluation2.jpg",
      alt: "Evaluation 2",
    },
    title: "Evaluation 2",
  },
];

export const BISection = () => {
  const authCtx = useContext(AuthContext);
  const dashCtx = useContext(DashboardContext);

  const handleReset = () => {
    dashCtx.changeInterviewState(false);
  };

  useEffect(() => {
    console.log(authCtx.studentInfo);
  }, []);

  return (
    <div className="flex flex-col items-center h-full p-4 divide-y-2 gap-2">
      <div>
        <p>Please read the guide before starting the interview</p>
        <div className="rounded-lg bg-binghamton-green hover:bg-black text-white justify-center flex">
          {/* <button className="w-full h-full p-4">
            Assessor Guide Interview Script
          </button> */}
          <Link
            href="BIGuide"
            className="w-full h-full p-4 justify-center flex"
          >
            Assessor Guide Interview Script
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-evenly gap-8 pt-5 px-8">
        {cardInfo.map((elem, idx) => {
          return (
            <div key={idx}>
              <BICard cardInfo={elem} />
            </div>
          );
        })}
      </div>
      <div className="flex w-full h-full justify-end items-end ">
        <div
          className="rounded-lg bg-binghamton-green hover:bg-black text-white justify-center flex py-4 px-8"
          onClick={() => {
            console.log("Continue to next participant");
            handleReset();
          }}
        >
          Continue to next participant
        </div>
      </div>
    </div>
  );
};
