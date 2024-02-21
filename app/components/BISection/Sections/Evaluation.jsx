import { BIQuestionContext } from "@/app/store/biquestion-context";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import "./Sections.css";
import { StartButton } from "../../Buttons/StartButton/StartButton";
import { BI_SECTION } from "@/app/enums/bi_section_enums";
import { QNumberGrid } from "../../QuestionNumberGrid/QNumberGrid";

export const Evaluation = ({ e1Data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const biQctx = useContext(BIQuestionContext);
  const [optionsArr, setOptionsArr] = useState([]);

  const [isSubmitBtnDisabled, setSubmitBtnDisabled] = useState(true);

  const currTopic = 20;

  const [optAnswerArr, setOptAnswerArr] = useState([-10, -10, -10, -10, -10]);

  const [answersArr1, setAnsArr1] = useState([]);
  const [answersArr2, setAnsArr2] = useState([]);

  const handleAnswer = (qidx, idx) => {
    console.log(qidx, idx);
    let prev = optAnswerArr;
    prev[qidx] = idx;
    setOptAnswerArr(prev);
    console.log(optAnswerArr);
    biQctx.changeS1CompStatus(qidx, section);
    biQctx.updateS1Answers(qidx, idx, idx, section);

    if (qidx == 0) {
      let pAr1 = new Array(answersArr1.length).fill(0);
      pAr1[idx - 1] = 1;
      setAnsArr1(pAr1);
      console.log(pAr1);
    }

    if (qidx == 1) {
      let pAr2 = new Array(answersArr2.length).fill(0);
      pAr2[idx - 1] = 1;
      setAnsArr2(pAr2);
      console.log(pAr2);
    }
  };

  const handleObservations = (event, idx) => {
    console.log(idx, ": ", event.target.value);
    let prev = optAnswerArr;
    prev[idx] = 1;
    setOptAnswerArr(prev);
    console.log(optAnswerArr);
    biQctx.changeS1CompStatus(idx, section);
    biQctx.updateSim1Observations(idx, event.target.value, section);
  };

  const getOptions = async () => {
    await biQctx
      .getS1Options()
      .then(async (r) => {
        console.log(r);
        await setOptionsArr(r);
        let narr = new Array(r[currTopic].options.length).fill(0);
        console.log(narr);
        await setAnsArr1(narr);
        await setAnsArr2(narr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitHandler = async () => {
    router.push(`/Quiz/section-complete?section=${section}`);
  };

  useEffect(() => {
    // biQctx.getS1Options();
    if (optionsArr.length <= 0) {
      getOptions();
    }

    if (biQctx.e1CompleteStatus) {
      setSubmitBtnDisabled(false);
    }

    if (biQctx.e2CompleteStatus) {
      setSubmitBtnDisabled(false);
    }

    console.log(e1Data);
  }, [biQctx.e1CompleteStatus, biQctx.e2CompleteStatus]);

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col h-full w-4/5 p-8 gap-8">
        {optionsArr.length > 0 ? (
          <>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="sectionTitle">{e1Data[0].Q}</h1>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="evalQuestion">
                {/* {Evaluation2Data[currentQuestion].question1} */}
                {optionsArr[currTopic].idNameNum}
              </h3>
              <div className="flex flex-col w-full gap-3">
                {optionsArr[currTopic].options.map((opt, idx) => {
                  return (
                    <div key={idx}>
                      <div>
                        <button
                          className={` w-full h-full flex  ${
                            answersArr1[idx] == 1
                              ? "evalOptionsBtnSelect"
                              : "evalOptionsBtn"
                          } px-12 py-6 items-center`}
                          onClick={() => {
                            handleAnswer(0, idx + 1);
                            //   highlightSelect(idx, id);
                          }}
                        >
                          {idx + 1}. {opt.idx}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              <h3 className="evalQuestion">
                {/* {Evaluation2Data[currentQuestion].question1} */}
                {optionsArr[currTopic + 1].idNameNum}
              </h3>
              <div className="flex flex-col w-full gap-3">
                {optionsArr[currTopic + 1].options.map((opt, idx) => {
                  return (
                    <div key={idx}>
                      <div>
                        <button
                          className={` w-full h-full flex ${
                            answersArr2[idx] == 1
                              ? "evalOptionsBtnSelect"
                              : "evalOptionsBtn"
                          } px-12 py-6 items-center`}
                          onClick={() => {
                            handleAnswer(1, idx + 1);
                            //   highlightSelect(idx, id);
                          }}
                        >
                          {idx + 1}. {opt.idx}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div>
                <h3 className="questionTitle">Observations</h3>
              </div>
              <div className="h-1/4">
                <textarea
                  className="observationTxtBox w-full ps-4 pt-2"
                  id="observationTxtBox"
                  cols="40"
                  rows="10"
                  placeholder="Observation is required. If there are no observations, Please just write NA."
                  onChange={() => {
                    handleObservations(event, 2);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-1/2">
              <div>
                <div className="flex justify-between">
                  <h3 className="questionTitle">{e1Data[0].SeekingMoreInfo}</h3>
                  <input
                    className="numInput ps-4"
                    type="Number"
                    min={0}
                    max={10}
                    required
                    onChange={() => {
                      handleObservations(event, 3);
                    }}
                  ></input>
                </div>
                <h4>Scale 1 - 10: 1=Seeking lowest, 10=Seeking highest</h4>
              </div>
              <div>
                <div className="flex justify-between">
                  <h3 className="questionTitle">
                    {e1Data[0].SharingResponsibility}
                  </h3>
                  <input
                    className="numInput ps-4"
                    type="Number"
                    min={0}
                    max={10}
                    required
                    onChange={() => {
                      handleObservations(event, 4);
                    }}
                  ></input>
                </div>
                <h4>Scale 1 - 10: 1=Sharing lowest, 10=Sharing highest</h4>
              </div>
            </div>
            <div className="w-full flex justify-center pt-12 pb-8">
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
      <div className="h-full w-1/5 px-3 py-8 fixed top-15 right-0">
        <QNumberGrid
          noOfQuestions={2}
          whichMinQues={0}
          whichQues={1}
          isSubmitBtnDisabled={true}
        />
      </div>
    </div>
  );
};
