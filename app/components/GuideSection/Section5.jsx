import Link from "next/link";
import React from "react";
import { StartButton } from "../Buttons/StartButton/StartButton";
import { GUIDE_ENUMS } from "@/app/enums/guide_enums";

export const Section5 = () => {
  return (
    <div className="h-full min-h-screen w-full pt-8">
      <div className="flex justify-center">
        <div className="flex w-5/6 ">
          <div className="flex w-full flex-col  gap-8 pb-6">
            <h1 className="titleText self-center">Section 5 </h1>
            <div className="bg-white p-6 rounded-md border-2 w-fullshadow-sm ">
              <div className="flex gap-2">
                <p className="sectionTitle ">Wrap Up and Closing</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-lime-100 px-8 py-4 rounded-md">
                  <ol className="flex flex-col gap-4 px-10 instructionText">
                    <li>
                      1. Tell me about some situations in which you had to
                      adjust quickly to changes in organizational or
                      departmental priorities. What were they, and how did you
                      cope with them?
                    </li>
                    <li>
                      2. What are the most stressful aspects of your
                      current/last job? Why were they stressful? Give me an
                      example of a recent time when this stressful situation
                      occurred. What did you do?
                    </li>
                    <li>
                      3. Working effectively with a new supervisor, employee, or
                      work team can sometimes be challenging. Tell me about a
                      time when you found it difficult to get used to a new
                      person or team. How did things turn out?
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="self-center w-1/3">
              <Link href="/Dashboard">
                <StartButton buttonText={"Done"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
