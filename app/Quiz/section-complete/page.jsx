"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import "./SectionComplete.css";
import { BI_SECTION } from "@/app/enums/bi_section_enums";
import { useRouter } from "next/navigation";

export default function SectionComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  return (
    <div className="flex h-screen w-full justify-center items-center text-black">
      <div className="scoreBox w-1/2 h-1/2 flex flex-col justify-center items-center gap-28">
        {section === BI_SECTION.SIMULTAION1 && (
          <>
            <div className="scoreTitle flex flex-col justify-center items-center px-2">
              <h1>You Have completed Simulation1!</h1>
              <h4>(1/4)</h4>
            </div>
            <button
              className="completeBtn"
              onClick={() => {
                router.push(`/Quiz?section=${BI_SECTION.EVALUATION1}`);
                // router.push(`/Quiz?section=${BI_SECTION.SIMULATION2}`);
              }}
            >
              Evaluation 1
            </button>
          </>
        )}
        {section === BI_SECTION.EVALUATION1 && (
          <>
            <div className="scoreTitle flex flex-col justify-center items-center px-2">
              <h1>You Have completed Evaluation1!</h1>
              <h4>(2/4)</h4>
            </div>
            <button
              className="completeBtn"
              onClick={() => {
                router.push(`/Quiz?section=${BI_SECTION.SIMULATION2}`);
                // router.push(`/Quiz?section=${BI_SECTION.SIMULATION2}`);
              }}
            >
              Simulation 1
            </button>
          </>
        )}
        {section === BI_SECTION.SIMULATION2 && (
          <>
            <div className="scoreTitle flex flex-col justify-center items-center px-2">
              <h1>You Have completed Simulation2!</h1>
              <h4>(3/4)</h4>
            </div>
            <button
              className="completeBtn"
              onClick={() => {
                router.push(`/Quiz?section=${BI_SECTION.EVALUATION2}`);
                // router.push(`/Quiz?section=${BI_SECTION.SIMULATION2}`);
              }}
            >
              Evaluation 1
            </button>
          </>
        )}
        {section === BI_SECTION.EVALUATION2 && (
          <>
            <div className="scoreTitle flex flex-col justify-center items-center px-2">
              <h1>You Have completed Evaluation2!</h1>
              <h4>(4/4)</h4>
            </div>
            <button
              className="completeBtn"
              //   onClick={() => {
              //     router.push(`/Quiz?section=${BI_SECTION.SIMULATION2}`);
              //     // router.push(`/Quiz?section=${BI_SECTION.SIMULATION2}`);
              //   }}
            >
              Submit All the Answers
            </button>
          </>
        )}
      </div>
    </div>
  );
}
