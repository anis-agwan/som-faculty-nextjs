import React from "react";
import { BICard } from "../BICard/BICard";
import { BI_SECTION } from "@/app/enums/bi_section_enums";

const cardInfo = [
  {
    className: "s1Card",
    section: BI_SECTION.SIMULTAION1,
    imageSrc: {
      src: "./situation1.jpg",
      alt: "Simulation 1",
    },
    title: "Simulation 1",
  },
  {
    className: "s2Card",
    section: BI_SECTION.SIMULATION2,
    imageSrc: {
      src: "./situation2.jpg",
      alt: "Simulation 2",
    },
    title: "Simulation 2",
  },
  {
    className: "e1Card",
    section: BI_SECTION.EVALUATION1,
    imageSrc: {
      src: "./evaluation1.jpg",
      alt: "Evaluation 1",
    },
    title: "Evaluation 1",
  },
  {
    className: "e2Card",
    section: BI_SECTION.EVALUATION2,
    imageSrc: {
      src: "./evaluation2.jpg",
      alt: "Evaluation 2",
    },
    title: "Evaluation 2",
  },
];

export const BISection = () => {
  return (
    <div className="flex w-full justify-evenly gap-8 pt-5 px-8">
      {cardInfo.map((elem, idx) => {
        return (
          <div key={idx}>
            <BICard cardInfo={elem} />
          </div>
        );
      })}
    </div>
  );
};
