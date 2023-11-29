import React, { useContext, useEffect, useState } from "react";
import "./Sections.css";
import { BIQuestionContext } from "@/app/store/biquestion-context";
import { StartButton } from "../../Buttons/StartButton/StartButton";

export const Simulation = ({ s1Data }) => {
  const biQctx = useContext(BIQuestionContext);
  const [optionsArr, setOptionsArr] = useState([]);

  const [currTopic, setCurrTopic] = useState(0);

  const [isNextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [isPrevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [optAnswerArr, setOptAnswerArr] = useState([-10, -10, -10, -10]);

  const handleAnswer = (qidx, idx, value) => {
    biQctx.updateS1Answers(qidx, idx, value);
  };

  const highlightSelect = (idx, value) => {
    console.log("Q: ", idx, "Op: ", value);

    let prev = optAnswerArr;
    prev[idx] = value;
    setOptAnswerArr(prev);
    console.log(optAnswerArr);
    // console.log(prev);
  };

  const handleObservations = (event, idx) => {
    console.log(idx, ": ", event.target.value);
    biQctx.updateSim1Observations(idx, event.target.value);
  };

  const getOptions = async () => {
    await biQctx
      .getS1Options()
      .then((r) => {
        console.log(r);
        setOptionsArr(r);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const prevHandler = async () => {
    if (currTopic > 0) {
      let newT = currTopic - 1;
      console.log(newT);
      if (newT === 0) {
        console.log("DISABLING");
        await setPrevBtnDisabled(true);
      }
      setCurrTopic(newT);
      await setNextBtnDisabled(false);
      window.scrollTo(0, 0);
      setOptAnswerArr([-10, -10, -10, -10]);
    }
  };

  const nextHandler = async () => {
    if (currTopic < s1Data.length) {
      let newT = currTopic + 1;
      console.log(newT);
      await setPrevBtnDisabled(false);
      if (newT + 1 === s1Data.length) {
        console.log("DISABLING");
        await setNextBtnDisabled(true);
      }
      setCurrTopic(newT);
      window.scrollTo(0, 0);
      setOptAnswerArr([-10, -10, -10, -10]);
    }
  };

  useEffect(() => {
    // biQctx.getS1Options();
    if (optionsArr.length <= 0) {
      getOptions();
    }

    console.log(s1Data);
  }, [optAnswerArr]);

  return (
    <div className="flex flex-col h-full w-full p-8 gap-6">
      {optionsArr.length > 0 ? (
        <>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="sectionTitle">{s1Data[currTopic].Q}</h1>
              <h4 className="sectionDescription">
                Note: Evaluate the following questions as if you were the group
                leader
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-2">
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
                        {optionsArr[currTopic].options.map((opt, id) => {
                          return (
                            <div key={id}>
                              {opt.idx !== "None" && (
                                <div>
                                  <button
                                    className={`${
                                      optAnswerArr[idx] === id && "selected"
                                    } w-full h-full flex optionsBtn px-12 py-6 justify-center items-center`}
                                    onClick={() => {
                                      handleAnswer(currTopic, idx + 1, id + 1);
                                      //   highlightSelect(idx, id);
                                    }}
                                  >
                                    {opt.idx}
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
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
                className="observationTxtBox w-full"
                cols="40"
                rows="10"
                onChange={() => {
                  handleObservations(event, currTopic);
                }}
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
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">Loading...</div>
        </>
      )}
    </div>
  );
};
