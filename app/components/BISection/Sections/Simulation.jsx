import React, { useContext, useEffect, useState } from "react";
import "./Sections.css";
import { BIQuestionContext } from "@/app/store/biquestion-context";
import { StartButton } from "../../Buttons/StartButton/StartButton";
import { useRouter, useSearchParams } from "next/navigation";
import { BI_SECTION } from "@/app/enums/bi_section_enums";
import { AuthContext } from "@/app/store/auth-context";
import { QNumberGrid } from "../../QuestionNumberGrid/QNumberGrid";
import { useDispatch, useSelector } from "react-redux";
import { biActions } from "@/app/redux-store/biQuiz/bi-slice";

export const Simulation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const biQctx = useContext(BIQuestionContext);
  const authCtx = useContext(AuthContext);
  // const [optionsArr, setOptionsArr] = useState([]);
  
  const [currTopic, setCurrTopic] = useState(0);
  const [currOptRange, setCurrOptRange] = useState(0);
  const [qgridMinRange, setQGridMinRange] = useState(0);
  const [qgridMaxRange, setQGridMaxRange] = useState(3);

  const [isNextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [isPrevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [isSubmitBtnDisabled, setSubmitBtnDisabled] = useState(true);

  const dispatch = useDispatch();
  const simOptions = useSelector((state) => state.bi.sim1Options);
  const sim1Data = useSelector((state) => state.bi.simulation1Data);
  const sim1BISim1IdxStatus = useSelector((state) => state.bi.sim1QuestionIdxStatus)
  const sim1CompleteStatus = useSelector((state) => state.bi.sim1CompleteStatus);

  const sim2BISim1IdxStatus = useSelector((state) => state.bi.sim2QuestionIdxStatus)
  const sim2CompleteStatus = useSelector((state) => state.bi.sim2CompleteStatus);



  const handleAnswer = (qidx, idx, value) => {
    console.log("QIDX: ", qidx, " IDX: ", idx, " VALUE: ", value);
   
    dispatch(
      biActions.rdxUpdateSim1Answers({
        qidx: qidx,
        idx: idx,
        value: value,
        section: section
      })
    )
  
    dispatch(
      biActions.rdxChangeBISim1IdxStatus({
        section: section,
        currTopic: currTopic,
        idx: idx - 1,
        value: value
      })
    )

  };


  const handleObservations = (event, idx) => {
    console.log(idx, ": ", event.target.value);
   
    dispatch(
      biActions.rdxUpdateSim1Observations({
        idx: idx,
        value: event.target.value,
        section: section
      })
    )

    if(event.target.value != "") {
      dispatch(
        biActions.rdxChangeBISim1IdxStatus({
          section: section,
          currTopic: currTopic,
          idx: 5 - 1,
          value: 5
        })
      )
    }

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
      eraseText();
    }
  };

  const nextHandler = async () => {
   

    console.log(sim1Data.length)


    if(section === BI_SECTION.SIMULTAION1 && sim1BISim1IdxStatus[currTopic].includes(0)) {
      console.log("0s")
      alert("Please fill all the section before moving ahead");
      return;
    }

    if(section === BI_SECTION.SIMULATION2 && sim2BISim1IdxStatus[currTopic].includes(0)) {
      console.log("00s")
      alert("Please fill all the section before moving ahead");
      return;
    }

    if (currTopic < sim1Data.length) {
      let newT = currTopic + 1;
      let newRange = currOptRange + 4;
      //   console.log(newT);
      await setPrevBtnDisabled(false);
      if (newT + 1 === sim1Data.length) {
        console.log("DISABLING");
        await setNextBtnDisabled(true);
      }
      setCurrOptRange(newRange);
      setCurrTopic(newT);
      window.scrollTo(0, 0);
      setQGridMaxRange(qgridMaxRange + 4);
      setQGridMinRange(qgridMinRange + 4);
      eraseText();
    }
  };

  const onSubmitHandler = async () => {
    router.push(`/Quiz/section-complete?section=${section}`);
  };

  useEffect(() => {
    console.log(sim1Data)
   
    if (sim1CompleteStatus) {
      setSubmitBtnDisabled(false);
    }

    if (sim2CompleteStatus) {
      setSubmitBtnDisabled(false);
    }

  }, [
    dispatch,
    sim1CompleteStatus,
    // biQctx.s1CompleteStatus,
    sim2CompleteStatus,
    // biQctx.highlightSim,
  ]);

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col h-full w-3/4 p-8 gap-6">
        {simOptions.length > 0 ? (
          <>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="sectionTitle">{sim1Data[currTopic].Q}</h1>
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
              {sim1Data.length > 0 && (
                <>
                  {sim1Data[currTopic].questions.map((elem, idx) => {
                    return (
                      <div key={idx}>
                        <div>
                          {/* {console.log(elem)} */}
                          <h3 className="questionTitle">{elem.question}</h3>
                        </div>

                        <div className="flex flex-col w-full gap-3">
                          {simOptions[currOptRange + idx].options.map(
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
