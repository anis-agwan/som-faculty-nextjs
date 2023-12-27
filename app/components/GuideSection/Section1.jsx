import React from "react";
import { StartButton } from "../Buttons/StartButton/StartButton";
import "./Section.css";
import Link from "next/link";
import { GUIDE_ENUMS } from "@/app/enums/guide_enums";

export const Section1 = () => {
  return (
    <div className="h-full w-full pt-8">
      <div className="flex justify-center">
        <div className="flex w-5/6 ">
          <div className="flex w-full flex-col  gap-8 pb-6">
            <h1 className="titleText self-center">Section 1 </h1>
            <div className="bg-white p-6 rounded-md border-2 w-fullshadow-sm ">
              <div className="flex gap-2">
                <p className="sectionTitle ">Opening & Introduction</p>
              </div>
              <div>
                <br />
                <p className="instructionText ">
                  Provide a description to the candidate of the process that
                  they will be going through.
                </p>
                <br />
                <p className="instructionText ">
                  Greet the candidate and introduce yourself. Try to set them at
                  ease. Provide them with a description of the process that
                  he/she will be going through over the next 2.5 - 3 hours.
                </p>
                <br />
                <p className="instructionText ">
                  Make sure he/she has the participant handout with information
                  on the two leadership simulations. Ask if he/she has any
                  questions.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-md border-2 w-fullshadow-sm ">
              <div className="flex gap-2">
                <p className="sectionTitle ">OPENING:</p>
                <p className="sectionTitle ">Tell Me About You</p>
              </div>
              <div>
                <br />
                <p className="instructionText ">
                  Tell the candidate, &quot;I&#39;d like you to take about 3 – 5
                  minutes and tell me a little bit about you. Let me know
                  anything that you feel would help me get to know you better.
                  If possible, however, please avoid topics such as politics and
                  religion. I may ask you some follow-up questions.&quot;
                </p>
                <br />
                <p className="instructionText ">
                  Allow the candidate approximately 5 minutes to tell you about
                  him/her. When you get a chance, make overall ratings of the
                  following competencies:
                </p>
                <ul className="px-8 instructionText">
                  <li>Making a Positive Impact</li>
                  <li>Oral Communication</li>
                </ul>
                <br />
                <p className="instructionText ">
                  Transition to the next section.
                </p>
              </div>
            </div>
            <div className="self-center w-1/3">
              <Link
                href={{
                  pathname: "/BIGuide/GuideSection",
                  query: {
                    section: GUIDE_ENUMS.SECTION2,
                  },
                }}
              >
                <StartButton buttonText={"Section 2"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
