"use client";

import { useDate } from "@/date/use-date";
import { DateProps } from "@/types/date";
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { addDays, differenceInCalendarDays } from 'date-fns';

export function DateForm() {
  const { dates, setDates } = useDate();

  const handleDateChange = (date: Date | null, isStartDate: boolean) => {
    if (isStartDate) {
      setDates(prevDates => ({
        ...prevDates,
        startDate: date,
      }));
    } else {
      setDates(prevDates => ({
        ...prevDates,
        endDate: date,
      }));

      if (prevDates.startDate && date) {
        const diffDays = differenceInCalendarDays(date, prevDates.startDate);
        setDates(prevDates => ({
          ...prevDates,
          endDate: date,
          numberOfDays: diffDays >= 0 ? diffDays : 0, // Prevent negative values
        }));
      }
    }
  };

  const handleWarrantyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates(prevDates => ({
      ...prevDates,
      warrantyValue: event.target.value,
    }));
  };

  return (
    <div>
      <MuiDatePicker
        label="Inicio Vigência"
        value={dates.startDate}
        onChange={(date) => handleDateChange(date, true)}
      />
      <MuiDatePicker
        label="Final Vigência"
        value={dates.endDate}
        onChange={(date) => handleDateChange(date, false)}
      />
      <TextField
        label="Valor Garantia"
        value={dates.warrantyValue || ''}
        onChange={handleWarrantyChange}
      />
    </div>
  );
};