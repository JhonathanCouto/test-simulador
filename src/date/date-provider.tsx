"use client";

import { DateProps } from "@/types/date";
import React, { Dispatch, SetStateAction, createContext, useState } from "react";

type DateContextType = {
  dates: DateProps;
  setDates: Dispatch<SetStateAction<DateProps>>;
}

const defaultDateValues: DateProps = {
  warrantyValue: null,
  startDate: null,
  endDate: null,
  numberOfDays: null,
};

export const DateContext = createContext<DateContextType>({
  dates: defaultDateValues,
  setDates: () => { },
})

export function DateProvider({ children }: { children: React.ReactNode }) {
  const [dates, setDates] = useState<DateProps>(defaultDateValues);


  return (
    <DateContext.Provider value={{ dates, setDates }}>
      {children}
    </DateContext.Provider>
  )
}