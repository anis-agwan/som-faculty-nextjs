"use client";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import "./SectionComplete.css";
import { BI_SECTION } from "@/app/enums/bi_section_enums";
import { useRouter } from "next/navigation";
import { BIQuestionContext } from "@/app/store/biquestion-context";
import { useDispatch, useSelector } from "react-redux";
import { rdxSubmitS1Answers, rdxSubmitS2Answers, submitS1Answers } from "@/app/redux-store/biQuiz/bi-actions";
import { AuthContext } from "@/app/store/auth-context";

export default function SectionComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const biQCtx = useContext(BIQuestionContext);
  const authCtx = useContext(AuthContext);

  const sim1Answers = useSelector((state) => state.bi.sim1Answers);
  const sim2Answers = useSelector((state) => state.bi.sim2Answers);


  const dispatch = useDispatch();

  useEffect(() => {
    console.log(sim1Answers);
    console.log(sim2Answers);
  }, []);

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
              Simulation 2
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
              onClick={() => {
                // biQCtx.submitS1();
                dispatch(rdxSubmitS1Answers(sim1Answers, authCtx.studentInfo.bingNumber))
                // biQCtx.submitS2();
                dispatch(rdxSubmitS2Answers(sim2Answers, authCtx.studentInfo.bingNumber))
                // router.push(`/Dashboard`);
                // router.push(`/Quiz?section=${BI_SECTION.SIMULATION2}`);
              }}
            >
              Submit All the Answers
            </button>
          </>
        )}
      </div>
    </div>
  );
}
