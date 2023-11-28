import { ReportContext } from "@/app/store/reports-context";
import React, { useContext, useEffect, useState } from "react";
import { splitStringAfterEightWords } from "./split";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ReportBI = ({ bingNumber }) => {
  const reportCtx = useContext(ReportContext);
  const [isLoading, setLoading] = useState(false);
  const [biData, setBIData] = useState({});
  const [avgData, setAvgData] = useState({});
  const [commentsData, setCommentsData] = useState([
    "CR",
    "IC",
    "III",
    "IS",
    "SMI",
    "SR",
  ]);

  const [addComData, setAddCommData] = useState([]);

  const getBIData = async (bNum) => {
    setLoading(true);
    await reportCtx.getBIGraphData(bNum).then((r) => {
      console.log(r);

      const biAddComments = [
        r.biCommentCR,
        r.biCommentIC,
        r.biCommentIII,
        r.biCommentIS,
        r.biCommentSMI,
        r.biCommentSR,
      ];
      setAddCommData(biAddComments);

      let aid = {
        Data: {
          labels: ["Adapt to change 1", "Adapt to change 2"],
          datasets: [
            {
              label: "Average Adapt to Change",
              backgroundColor: [
                "rgba(245, 116, 39, 0.8)",
                "rgba(176, 245, 39, 0.8)",
              ],
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [r.avgAdaptToChange1, r.avgAdaptToChange2],
            },
          ],
        },
      };

      setAvgData(aid);

      let bid = {
        Data: {
          labels: commentsData,
          datasets: [
            {
              label: "BI Scores",
              backgroundColor: [
                "rgba(245, 39, 48, 0.8)",
                "rgba(39, 245, 39, 0.8)",
                "rgba(245, 39, 228, 0.8)",
                "rgba(39, 151, 245, 0.8)",
                "rgba(39, 245, 215, 0.8)",
                "rgba(39, 52, 245, 0.8)",
              ],
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: [
                r.biScoreCR,
                r.biScoreIC,
                r.biScoreIII,
                r.biScoreIS,
                r.biScoreSMI,
                r.biScoreSR,
              ],
            },
          ],
        },
      };

      setBIData(bid);
    });

    setLoading(false);
  };

  const config = {
    responsive: true,
    scale: {
      beginAtZero: true,
      max: 10,
      min: 0,
      stepSize: 1,
    },
    plugins: {
      legend: false,
      tooltip: {
        displayColors: false,
        callbacks: {
          title: (context) => {
            return `Score: ${context[0].formattedValue}`;
          },
          label: (context) => {
            const st = splitStringAfterEightWords(comments[context.dataIndex]);
            return st;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            console.log(value, index, ticks);

            if (index === 0) {
              return "Needs Development: " + value;
            } else if (index === config.scale.max) {
              return "Excellent: " + value;
            } else {
              return value;
            }

            // return "$" + value;
          },
          align: "center",
        },
      },
    },
  };

  useEffect(() => {
    if (bingNumber !== "") {
      getBIData(bingNumber);
    }
  }, [bingNumber]);

  return (
    <div className="flex h-full w-full">
      <div className="pt-2 overflow-auto flex flex-col w-full justify-center items-center ">
        {isLoading ? (
          <>
            <div>
              <h3> Loading....</h3>
            </div>
          </>
        ) : (
          <>
            <div className="h-full w-full">
              {Object.keys(biData).length > 0 &&
              Object.keys(avgData).length > 0 ? (
                <>
                  <div className="w-10/12 pt-3">
                    <Bar data={avgData.Data} options={config} />
                  </div>
                  <div className="w-10/12 pt-3">
                    <Bar data={biData.Data} options={config} />
                  </div>
                  <div className="flex flex-col w-full px-6 pb-4">
                    <ol type="1">
                      {addComData.map((e, idx) => {
                        return (
                          <div key={idx} className="p-2">
                            <li>
                              <h3>
                                <b>{commentsData[idx]} :</b> {e}
                              </h3>
                            </li>
                          </div>
                        );
                      })}
                    </ol>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3>No Data</h3>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
