import React, { useContext, useState } from "react";
import "./BICard.css";
import Link from "next/link";
import { BIQuestionContext } from "@/app/store/biquestion-context";

export const BICard = ({ cardInfo }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div>
      <Link
        href={{
          pathname: "/Quiz",
          query: {
            section: cardInfo.section,
          },
        }}
      >
        <button>
          <div
            className={`biCard ${cardInfo.className} flex items-end justify-center pb-5`}
          >
            <h1 className="biCardTitle">{cardInfo.title}</h1>
          </div>
        </button>
      </Link>
    </div>
  );
};
