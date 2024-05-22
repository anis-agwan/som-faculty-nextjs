import React, { useContext, useEffect, useState } from "react";
import "./Sections.css";
import { BIQuestionContext } from "@/app/store/biquestion-context";
import { StartButton } from "../../Buttons/StartButton/StartButton";
import { useRouter, useSearchParams } from "next/navigation";
import { BI_SECTION } from "@/app/enums/bi_section_enums";
import { AuthContext } from "@/app/store/auth-context";
import { QNumberGrid } from "../../QuestionNumberGrid/QNumberGrid";

export const Simulation = ({ s1Data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const biQctx = useContext(BIQuestionContext);
  const authCtx = useContext(AuthContext);
  const [optionsArr, setOptionsArr] = useState([]);

  const [currTopic, setCurrTopic] = useState(0);
  const [currOptRange, setCurrOptRange] = useState(0);
  const [qgridMinRange, setQGridMinRange] = useState(0);
  const [qgridMaxRange, setQGridMaxRange] = useState(3);

  const [isNextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [isPrevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [isSubmitBtnDisabled, setSubmitBtnDisabled] = useState(true);

  const [optAnswerArr, setOptAnswerArr] = useState([-10, -10, -10, -10, -10]);

  const handleAnswer = (qidx, idx, value) => {
    console.log("QIDX: ", qidx, " IDX: ", idx, " VALUE: ", value);
    let prev = optAnswerArr;
    prev[idx - 1] = value;
    setOptAnswerArr(prev);
    console.log(optAnswerArr);
    biQctx.changeS1CompStatus(currOptRange + idx - 1, section);
    console.log(biQctx.s1CompleteStatus);
    biQctx.updateS1Answers(qidx, idx, value, section);

    biQctx.highlightingSimAns(idx - 1, section, value - 1);
  };

  //   const highlightSelect = (idx, value) => {
  //     console.log("Q: ", idx, "Op: ", value);

  //     let prev = optAnswerArr;
  //     prev[idx] = value;
  //     setOptAnswerArr(prev);
  //     console.log(optAnswerArr);
  //     // console.log(prev);
  //   };

  const handleObservations = (event, idx) => {
    console.log(idx, ": ", event.target.value);
    let prev = optAnswerArr;
    prev[prev.length - 1] = 1;
    setOptAnswerArr(prev);
    console.log(optAnswerArr);
    biQctx.updateSim1Observations(idx, event.target.value, section);
    biQctx.changeS1Obs(currTopic, section);
  };

  const getOptions = async () => {
    await biQctx
      .getS1Options()
      .then((r) => {
        // console.log(r);
        setOptionsArr(r);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const eraseText = () => {
    document.getElementById("observationTxtBox").value = "";
  };

  const prevHandler = async () => {
    if (currTopic > 0) {
      let newT = currTopic - 1;
      let newRange = currOptRange - 4;
      console.log(newT);
      if (newT === 0) {
        console.log("DISABLING");
        await setPrevBtnDisabled(true);
      }
      setCurrOptRange(newRange);
      setCurrTopic(newT);
      await setNextBtnDisabled(false);
      window.scrollTo(0, 0);
      setQGridMaxRange(qgridMaxRange - 4);
      setQGridMinRange(qgridMinRange - 4);
      setOptAnswerArr([-10, -10, -10, -10]);
      eraseText();
    }
  };

  const nextHandler = async () => {
    // if (optAnswerArr.includes(-10)) {
    //   alert("Please fill all the section before moving ahead");
    //   return;
    // }

    let subArr = biQctx.arrSim1AnsStats.slice(currOptRange, currOptRange + 4);
    console.log(subArr);

    if (subArr.includes(0) && biQctx.arrSim1Observ[currTopic] === 0) {
      alert("Please fill all the section before moving ahead");
      return;
    }

    if (currTopic < s1Data.length) {
      let newT = currTopic + 1;
      let newRange = currOptRange + 4;
      //   console.log(newT);
      await setPrevBtnDisabled(false);
      if (newT + 1 === s1Data.length) {
        console.log("DISABLING");
        await setNextBtnDisabled(true);
      }
      setCurrOptRange(newRange);
      setCurrTopic(newT);
      window.scrollTo(0, 0);
      setQGridMaxRange(qgridMaxRange + 4);
      setQGridMinRange(qgridMinRange + 4);
      setOptAnswerArr([-10, -10, -10, -10]);
      eraseText();
    }
  };

  const onSubmitHandler = async () => {
    router.push(`/Quiz/section-complete?section=${section}`);
  };

  useEffect(() => {
    // biQctx.getS1Options();
    // console.log(authCtx.studentInfo);
    console.log(biQctx.highlightSim);
    if (optionsArr.length <= 0) {
      getOptions();
    }

    if (biQctx.s1CompleteStatus) {
      setSubmitBtnDisabled(false);
    }

    if (biQctx.s2CompleteStatus) {
      setSubmitBtnDisabled(false);
    }

    console.log(s1Data);
  }, [
    optAnswerArr,
    biQctx.s1CompleteStatus,
    biQctx.s2CompleteStatus,
    biQctx.highlightSim,
  ]);

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col h-full w-3/4 p-8 gap-6">
        {optionsArr.length > 0 ? (
          <>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="sectionTitle">{s1Data[currTopic].Q}</h1>
                {section === BI_SECTION.SIMULTAION1 && (
                  <h4 className="sectionDescription">
                    Note: Evaluate the following questions as if you were the
                    group leader
                  </h4>
                )}
                {section === BI_SECTION.SIMULATION2 && (
                  <h4 className="sectionDescription">
                    Note : Evaluate the following questions as if you are Kerry
                  </h4>
                )}
              </div>
            </div>
            <div className="flex flex-col ">
              {s1Data.length > 0 && (
                <>
                  {s1Data[currTopic].questions.map((elem, idx) => {
                    return (
                      <div key={idx}>
                        <div>
                          {/* {console.log(elem)} */}
                          <h3 className="questionTitle">{elem.question}</h3>
                        </div>

                        <div className="flex flex-col w-full gap-3">
                          {optionsArr[currOptRange + idx].options.map(
                            (opt, id) => {
                              return (
                                <div key={id} className="w-full bg-green">
                                  {opt.idx !== "None" && (
                                    <div className="w-full ">
                                      <button
                                        className={` w-full h-full flex optionsBtn px-12 py-6 justify-center items-center`}
                                        onClick={() => {
                                          handleAnswer(
                                            currTopic,
                                            idx + 1,
                                            id + 1
                                          );
                                          //   highlightSelect(idx, id);
                                        }}
                                      >
                                        {opt.idx}
                                      </button>
                                    </div>
                                  )}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            <div className="flex flex-col w-full">
              <div>
                <h3 className="questionTitle">Observations</h3>
              </div>
              <div className="h-1/4">
                <textarea
                  className="observationTxtBox w-full ps-4"
                  id="observationTxtBox"
                  cols="40"
                  rows="10"
                  onChange={() => {
                    handleObservations(event, currTopic);
                  }}
                  placeholder="Observations are required. If there are no observations, please just type NA"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between px-16 pt-14">
              <div className="w-1/6" onClick={prevHandler}>
                <StartButton
                  buttonText={"Prev"}
                  isBtnDisabled={isPrevBtnDisabled}
                />
              </div>
              <div className="w-1/6" onClick={nextHandler}>
                <StartButton
                  buttonText={"Next"}
                  isBtnDisabled={isNextBtnDisabled}
                />
              </div>
              <div className="w-1/6" onClick={onSubmitHandler}>
                <StartButton
                  buttonText={"Submit"}
                  isBtnDisabled={isSubmitBtnDisabled}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center">Loading...</div>
          </>
        )}
      </div>
      <div className="h-full w-1/4 px-4 py-8 fixed top-15 right-0">
        <QNumberGrid
          noOfQuestions={20}
          whichMinQues={qgridMinRange}
          whichQues={qgridMaxRange}
          isSubmitBtnDisabled={true}
        />
      </div>
    </div>
  );
};
