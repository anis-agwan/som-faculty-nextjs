import React, { useState } from "react";

export const Evaluation = () => {
  const [optionsArr, setOptionsArr] = useState([]);
  return (
    <div className="flex flex-col h-full w-full p-8 gap-6">
      {optionsArr.length > 0 ? <></> : <>Evaluation</>}
    </div>
  );
};
