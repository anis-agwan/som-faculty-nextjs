"use client";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { BI_SECTION } from "../enums/bi_section_enums";
import { Evaluation } from "../components/BISection/Sections/Evaluation";
import { Simulation } from "../components/BISection/Sections/Simulation";
import { BIQuestionContext } from "../store/biquestion-context";

export default function Quiz() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const biqctx = useContext(BIQuestionContext);
  const s1Data = biqctx.s1Data;
  const e1Data = biqctx.e1Data;

  useEffect(() => {
    if (section === BI_SECTION.SIMULTAION1) {
      //   console.log(biqctx.s1Data);
    }
  });

  return (
    <div className="flex text-black min-h-screen w-full pt-16 ">
      {section === BI_SECTION.SIMULTAION1 && (
        <>
          <div className="h-full w-full">
            <Simulation s1Data={s1Data} />
          </div>
        </>
      )}
      {section === BI_SECTION.SIMULATION2 && (
        <>
          <div className="h-full w-full">
            <Simulation s1Data={s1Data} />
          </div>
        </>
      )}
      {section === BI_SECTION.EVALUATION1 && (
        <>
          <div className="h-full w-full">
            <Evaluation e1Data={e1Data} />
          </div>
        </>
      )}
      {section === BI_SECTION.EVALUATION2 && (
        <>
          <div>
            <Evaluation e1Data={e1Data} />
          </div>
        </>
      )}
    </div>
  );
}
