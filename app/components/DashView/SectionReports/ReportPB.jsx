import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { ReportContext } from "@/app/store/reports-context";

// import "./ReportGraphs.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const ReportPB = ({ bingNumber }) => {
  let ref = useRef(null);
  const reportCtx = useContext(ReportContext);
  const [isLoading, setLoading] = useState(false);
  const [pbData, setPBData] = useState({});
  const [comments, setComments] = useState([]);

  const getPBData = async (bNum) => {
    console.log(bNum);
    setLoading(true);
    await reportCtx.getPBGraphData(bNum).then((res) => {
      let data = {
        Data: {
          labels: [
            "Open to Change",
            "Coaching",
            "Planning and Organizing",
            "Teamwork",
            "Empowering",
          ],
          datasets: [
            {
              data: [
                res.openToChangeScore,
                res.coachingScore,
                res.planningAndOrganizingScore,
                res.teamworkScore,
                res.empoweringScore,
              ],
              backgroundColor: [
                "rgba(255, 45, 45, 0.62)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(0, 0, 0, 0.2)",
              ],
              borderColor: "rgba(255, 45, 45, 1)",
              // [
              //   "rgba(255, 26, 104, 1)",
              //   "rgba(54, 162, 235, 1)",
              //   "rgba(255, 206, 86, 1)",
              //   "rgba(75, 192, 192, 1)",
              //   "rgba(153, 102, 255, 1)",
              //   "rgba(255, 159, 64, 1)",
              //   "rgba(0, 0, 0, 1)",
              // ],
              borderWidth: 1,
            },
          ],
        },
        comments: [
          res.openToChangeScoreComment,
          res.coachingScoreComment,
          res.planningAndOrganizingScoreComment,
          res.teamworkScoreComment,
          res.empoweringScoreComment,
        ],
      };

      const comments = [
        res.openToChangeScoreComment,
        res.coachingScoreComment,
        res.planningAndOrganizingScoreComment,
        res.teamworkScoreComment,
        res.empoweringScoreComment,
      ];

      console.log(data);
      setComments(comments);
      setPBData(data);
    });
    setLoading(false);
  };

  const downloadImg = (event) => {
    let link = event.currentTarget;
    link.setAttribute("download", "canvas.png");
    let img = ref.current.toBase64Image();
    link.setAttribute("href", img);
  };

  const config = {
    scale: {
      beginAtZero: true,
      max: 10,
      min: 0,
      stepSize: 1,
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14,
          },
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            // console.log(value, index, ticks);

            if (index === 0) {
              return "Needs Development: " + value;
            } else if (index === config.scale.max) {
              return "Excellent: " + value;
            } else {
              return value;
            }

            // return "$" + value;
          },
          z: 1,
          align: "start",
        },
      },
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
            const arr = comments[context.dataIndex].split(". ");
            return arr;
          },
        },
      },
    },
  };

  useEffect(() => {
    // getPBData();
    console.log(bingNumber);
    if (bingNumber !== "") {
      getPBData(bingNumber);
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
            <div className="flex flex-col  items-center h-3/4">
              {Object.keys(pbData).length > 0 ? (
                <>
                  <div className="w-10/12">
                    <Radar ref={ref} data={pbData.Data} options={config} />
                  </div>
                  <div className="flex flex-col w-full px-6 pb-4">
                    <ol type="1">
                      {comments.map((e, idx) => {
                        return (
                          <div key={idx}>
                            <li>
                              <h3>
                                <b>{pbData.Data.labels[idx]} :</b> {e}
                              </h3>
                            </li>
                          </div>
                        );
                      })}
                    </ol>
                    <a id="down" href="linking" onClick={downloadImg}>
                      DOWNLN
                    </a>
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
