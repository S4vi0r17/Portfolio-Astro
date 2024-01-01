"use client";

import { useState, useEffect } from "react";

type FormatDateLongProps = {
  clientDate: Date;
  clientTimeZone: string;
};

const LargeDate = () => {
  const [formattedDate, setFormattedDate] = useState("now");
  const [weekday, setWeekday] = useState("now");

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-start justify-center">
        <span className="font-bold purple_gradient capitalize text-xl leading-5">
          {weekday}
        </span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default LargeDate;
