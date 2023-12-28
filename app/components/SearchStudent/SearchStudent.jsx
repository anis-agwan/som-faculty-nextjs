import React, { useContext, useEffect, useState } from "react";
import "./SearchStudent.css";
import { SearchButton } from "../Buttons/SearchButtons/SearchButton";
import { DashboardContext } from "@/app/store/dashboard-context";
import { SECTION } from "@/app/enums/section_enums";
import { ReportContext } from "@/app/store/reports-context";
import { AuthContext } from "@/app/store/auth-context";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Pdfcreate } from "../PDF/Pdfcreate";

export const SearchStudent = ({
  bNum,
  bNumChangeHandler,
  validBnum,
  onSubmit,
}) => {
  const dashCtx = useContext(DashboardContext);
  const reportCtx = useContext(ReportContext);
  const authCtx = useContext(AuthContext);
  const [completeStudentData, setCompStudentData] = useState({});

  const [isDataLoaded, setDataLoaded] = useState(validBnum);
  const [hasStudentCompleted, setHasStudComp] = useState(false);
  // const getStudentInfo = async () => {
  //   let sData = {};
  //   await authCtx.pdfStudentInfo(bNum).then((r) => {
  //     console.log(r);
  //   });
  //   setCompStudentData(sData);
  // };

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // const handlePDFClick = async (event) => {
  //   event.preventDefault();
  //   await delay(1000);
  //   setDataLoaded(false);
  // };

  const checkUser = async (bNum) => {
    if (dashCtx.viewState === SECTION.DASH) {
      let data = {};

      let whatit = await authCtx.didStudentComplete(bNum).then((r) => {
        console.log("DBDB", r);
        if (!r) {
          alert(
            "Student has not completed all the assessment quizes and interview."
          );
          // return;
        }

        return r;
      });

      if (!whatit) {
        console.log(whatit);
        setHasStudComp(whatit);
        return;
      }

      await authCtx.pdfStudentInfo(bNum).then((r) => {
        // console.log(r);
        data = r;
      });
      console.log("HERE: ", data);
      return data;
    }
  };

  const pdfLoadHandler = async (bNum) => {
    console.log(completeStudentData);
    if (dashCtx.viewState === SECTION.DASH) {
      let sData = {};
      await authCtx.pdfStudentInfo(bNum).then((r) => {
        console.log(r);
        sData["info"] = r;
      });

      await reportCtx.getPBGraphData(bNum).then((r) => {
        sData["PB"] = r;
      });

      await reportCtx.getCTGraphData(bNum).then((r) => {
        // console.log("CT: ", r);
        sData["CT"] = r;
      });
      await reportCtx.getDDGraphData(bNum).then((r) => {
        // console.log("DD: ", r);
        sData["DD"] = r;
      });
      await reportCtx.getBIGraphData(bNum).then((r) => {
        console.log("BI: ", r);
        sData["BI"] = r;
      });
      console.log(sData);
      setCompStudentData(sData);
      // console.log(completeStudentData);
    }
  };

  const viewState = dashCtx.viewState;

  useEffect(() => {
    console.log(dashCtx.viewState);
    console.log(authCtx.studentInfo);
    if (Object.keys(authCtx.studentInfo).length > 0) {
      setCompStudentData({
        ...completeStudentData,
        info: authCtx.studentInfo,
      });
    }
    if (validBnum === false) {
      setDataLoaded(false);
    }
    // console.log(completeStudentData);
  }, [isDataLoaded, authCtx.studentInfo, validBnum]);

  return (
    <div className="pt-6 px-4 h-full">
      <div className="flex gap-4 h-full pt-3">
        <div className="w-3/4">
          <input
            className="searchBox w-full h-1/2 px-2"
            type="text"
            placeholder="Please enter Student's B-Number"
            onChange={bNumChangeHandler}
          ></input>
        </div>
        {isDataLoaded ? (
          <>
            {/* <Pdfcreate studentData={completeStudentData} /> */}
            <PDFDownloadLink
              className="Pdfcreate"
              document={<Pdfcreate studentData={completeStudentData} />}
              fileName={`${bNum}_MBA_Assessment_Report`}
            >
              {({ loading }) =>
                loading ? (
                  <button className="bg-black text-white">
                    loading PDF...
                  </button>
                ) : (
                  <button
                    className="w-full h-1/2 z-0 "
                    // onClick={handlePDFClick}
                  >
                    <SearchButton
                      buttonTxt={"Download Reports"}
                      className="z-0"
                    />
                  </button>
                )
              }
              {/* <div className="searchBtn h-2/4 p-5 flex justify-center items-center">
                Click to download reports
              </div> */}
            </PDFDownloadLink>
            {/* <Pdfcreate studentData={completeStudentData} /> */}
            {/* <SearchButton buttonTxt={"Download Reports"} /> */}
          </>
        ) : (
          <>
            <div
              className="flex justify-center items-center h-1/2 w-1/4"
              onClick={async () => {
                console.log(dashCtx.viewState);
                if (viewState !== SECTION.DASH) {
                  console.log("NOTNOT");
                  if (validBnum) {
                    onSubmit(bNum);
                  } else {
                    alert("Not valid BNUm");
                    return;
                  }
                  // validBnum ? onSubmit(bNum) : alert("Not valid BNUm") ret;
                }
                if (viewState === SECTION.DASH) {
                  console.log("YESYES");
                  // await getStudentInfo(bNum);
                  if (validBnum) {
                    let dd = await checkUser(bNum);
                    console.log(dd);
                    if (dd === undefined) {
                      return;
                    }
                    if (dd && Object.keys(dd).length === 0) {
                      console.log("NONONONO");
                      return;
                    }
                    await pdfLoadHandler(bNum);
                    setDataLoaded(true);
                  } else {
                    alert("Not valid BNUm");
                    return;
                  }
                }
              }}
            >
              <SearchButton buttonTxt={"Search Student Reports"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
