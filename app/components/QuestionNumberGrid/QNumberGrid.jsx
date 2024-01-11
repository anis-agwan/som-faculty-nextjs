import React, { useContext, useEffect } from "react";
import "./QNumberGrid.css";
import { AuthButton } from "../Buttons/AuthButton/AuthButton";
import { StartButton } from "../Buttons/StartButton/StartButton";
// import { QuestionContext } from "@/app/store/questions-context";
import { AuthContext } from "@/app/store/auth-context";
import { useRouter } from "next/navigation";
import { SECTION } from "@/app/enums/section_enums";
import { BI_SECTION } from "@/app/enums/bi_section_enums";
import { BIQuestionContext } from "@/app/store/biquestion-context";

export const QNumberGrid = ({
  noOfQuestions,
  whichMinQues,
  whichQues,
  isSubmitBtnDisabled,
  section,
}) => {
  const router = useRouter();
  const biqCtx = useContext(BIQuestionContext);
  // const authCtx = useContext(AuthContext);
  let questionStatus = [];

  if (section === BI_SECTION.SIMULTAION1) {
    questionStatus = biqCtx.highlightSim;
  }

  // console.log(section);

  // const submitAnswers = () => {
  //   authCtx.onUpdateStats(section);
  //   if (section === SECTION.PB) {
  //     questionCtx
  //       .submitPBAnswers()
  //       .then(() => {
  //         router.push("EndScreen");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (section === SECTION.CT) {
  //     // console.log("CLICKS CT");
  //     questionCtx.submitCTAnswers().then((res) => {
  //       if (res) {
  //         router.push("EndScreen");
  //       }
  //     });
  //   }
  // };

  useEffect(() => {
    console.log(biqCtx.highlightSim);
  }, [biqCtx.highlightSim]);

  return (
    <div className="boxContainer overflow-auto gap-3 p-5">
      <div className=" questionHeading">
        Question {whichMinQues + 1} - {whichQues + 1}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg: grid-cols-4 gap-y-2 justify-around items-center">
        {/* {arr.map((value, idx) => {
          return (
            <div key={idx} className="circleDiv text-white">
              {value}
            </div>
          );
        })} */}

        {Array(noOfQuestions)
          .fill(1)
          .map((value, idx) => {
            return (
              <div
                key={idx}
                className={
                  whichQues >= idx && idx >= whichMinQues
                    ? "circleDivCurrent"
                    : // : biqCtx.highlightSim[idx] !== -1
                      // ? "circleDivComplete"
                      "circleDiv"
                }
              >
                {idx + 1}
              </div>
            );
          })}
      </div>
      {/* <div
        className=" pt-5"
        // onClick={submitAnswers}
      >
        <StartButton
          buttonText={"Submit"}
          isBtnDisabled={isSubmitBtnDisabled}
        />
      </div> */}
    </div>
  );
};
