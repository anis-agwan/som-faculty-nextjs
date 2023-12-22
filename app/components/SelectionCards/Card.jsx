import React, { useContext } from "react";
import { SECTION } from "../../enums/section_enums";
import Image from "next/image";
import "./Card.css";
import Link from "next/link";
import { ArrowButton } from "../Buttons/ArrowButton/ArrowButton";
// import { SECTIONTYPE } from "@/app/enums/section_type";
import { GUIDE_ENUMS } from "@/app/enums/guide_enums";

export const Card = ({ section }) => {
  return (
    <div className="flex justify-center px-2">
      <div className="card">
        <div className="flex flex-col items-center">
          {section === GUIDE_ENUMS.SECTION1 && (
            <>
              <h1 className="title">Section 1</h1>
              <h1 className="title">Opening & Introduction</h1>
              <p className="description">
                Provide a description to the candidate of the process that they
                will be going through.
              </p>
            </>
          )}
          {section === GUIDE_ENUMS.SECTION2 && (
            <>
              <h1 className="title">Section 2</h1>
              <h1 className="title">Leadership Simulation 1</h1>
              <p className="description">
                Instruct the candidate to read over the simulation information.
              </p>
            </>
          )}
          {section === GUIDE_ENUMS.SECTION3 && (
            <>
              <h1 className="title">Section 3</h1>
              <h1 className="title">Past Behavior Questions</h1>
              <p className="description">
                Make ratings for adapting to change on adaptability evaluation
                form.
              </p>
            </>
          )}
          {section === GUIDE_ENUMS.SECTION4 && (
            <>
              <h1 className="title">Section 4</h1>
              <h1 className="title">Leadership Simulation 2</h1>
              <p className="description">
                Instruct candidate to read over instructions and prepare for
                next exercise.
              </p>
            </>
          )}

          {section === GUIDE_ENUMS.SECTION5 && (
            <>
              <h1 className="title">Section 5</h1>
              <h1 className="title">Wrap Up and Closing</h1>
              <p className="description">
                Thank and explain the candidate the next step in process.
              </p>
            </>
          )}

          {section === GUIDE_ENUMS.SECTION1 && (
            <Link
              href={{
                pathname: "/BIGuide/GuideSection",
                query: {
                  section: GUIDE_ENUMS.SECTION1,
                  // type: SECTIONTYPE.information,
                },
              }}
            >
              <ArrowButton />
            </Link>
          )}
          {section === GUIDE_ENUMS.SECTION2 && (
            <Link
              href={{
                pathname: "/BIGuide/GuideSection",
                query: {
                  section: GUIDE_ENUMS.SECTION2,
                },
              }}
            >
              <ArrowButton />
            </Link>
          )}
          {section === GUIDE_ENUMS.SECTION3 && (
            <Link
              href={{
                pathname: "/BIGuide/GuideSection",
                query: {
                  section: GUIDE_ENUMS.SECTION3,
                },
              }}
            >
              <ArrowButton />
            </Link>
          )}
          {section === GUIDE_ENUMS.SECTION4 && (
            <Link
              href={{
                pathname: "/BIGuide/GuideSection",
                query: {
                  section: GUIDE_ENUMS.SECTION4,
                },
              }}
            >
              <ArrowButton />
            </Link>
          )}

          {section === GUIDE_ENUMS.SECTION5 && (
            <Link
              href={{
                pathname: "/BIGuide/GuideSection",
                query: {
                  section: GUIDE_ENUMS.SECTION5,
                },
              }}
            >
              <ArrowButton />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
