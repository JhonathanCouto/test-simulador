"use client";

import { useDate } from "@/date/use-date";
import { DateProps } from "@/types/date";
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { differenceInDays, differenceInCalendarDays } from 'date-fns';

export function DateForm() {
  const { dates, setDates } = useDate();
  const { startDate, endDate, warrantyValue } = dates;

  const handleDateChange = (date: Date | null, isStartDate: boolean) => {
    if (isStartDate) {
      setDates(prevDates => ({
        ...prevDates,
        startDate: date,
      }));
    } else {
      setDates(prevDates => {
        const numberOfDays = date && prevDates.startDate ? differenceInCalendarDays(date, prevDates.startDate) : 0;
        return {
          ...prevDates,
          endDate: date,
          numberOfDays: numberOfDays >= 0 ? numberOfDays : 0,
        };
      });
    }
  };

  const handleWarrantyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDates(prevDates => ({
      ...prevDates,
      warrantyValue: event.target.value,
    }));
  };

  const calculateCoverageDays = (startDate: string | number | Date | null, endDate: string | number | Date | null) => {
    return startDate && endDate ? differenceInDays(new Date(endDate), new Date(startDate)) : '';
  };

  return (
    <div>
      <MuiDatePicker
        label="Inicio Vigência"
        value={startDate}
        onChange={(date) => handleDateChange(date, true)}
      />
      <TextField 
        label="Dia(s)"
        value={calculateCoverageDays(startDate, endDate)}
        inputProps={{
          readOnly: true,
        }}
      />
      <MuiDatePicker
        label="Final Vigência"
        value={endDate}
        disablePast
        onChange={(date) => handleDateChange(date, false)}
      />
      <TextField
        label="Valor Garantia"
        value={warrantyValue || ''}
        onChange={handleWarrantyChange}
      />
    </div>
  );
};