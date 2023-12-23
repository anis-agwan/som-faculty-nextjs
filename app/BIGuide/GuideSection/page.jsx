import { Section1 } from "@/app/components/GuideSection/Section1";
import { Section2 } from "@/app/components/GuideSection/Section2";
import { Section3 } from "@/app/components/GuideSection/Section3";
import { Section4 } from "@/app/components/GuideSection/Section4";
import { Section5 } from "@/app/components/GuideSection/Section5";
import { GUIDE_ENUMS } from "@/app/enums/guide_enums";
import React from "react";

export default function GuideSection({ searchParams }) {
  const section = searchParams.section;
  return (
    <div className="flex w-full h-full justify-center items-center text-black pt-16">
      {section === GUIDE_ENUMS.SECTION1 && <Section1 />}
      {section === GUIDE_ENUMS.SECTION2 && <Section2 />}
      {section === GUIDE_ENUMS.SECTION3 && <Section3 />}
      {section === GUIDE_ENUMS.SECTION4 && <Section4 />}
      {section === GUIDE_ENUMS.SECTION5 && <Section5 />}
    </div>
  );
}
