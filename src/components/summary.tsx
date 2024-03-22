"use client";

import { useDate } from '@/date/use-date';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format, differenceInCalendarDays, isValid } from 'date-fns';

export function Summary() {
  const { dates } = useDate();

  console.log(dates)

  const formatDate = (date?: Date | null) => {
    return date && isValid(date) ? format(date, 'dd/MM/yyyy') : 'N/A';
  };

  const calculateDiffDays = (startDate?: Date | null, endDate?: Date | null) => {
    if (startDate && endDate && isValid(startDate) && isValid(endDate)) {
      const diffDays = differenceInCalendarDays(endDate, startDate);
      return diffDays >= 0 ? diffDays : 'N/A';
    }
    return 'N/A';
  };

  const warrantyValue = dates?.warrantyValue ?? 'N/A';
  const startDate = formatDate(dates?.startDate);
  const endDate = formatDate(dates?.endDate);
  const diffDays = calculateDiffDays(dates?.startDate, dates?.endDate);

  return (
    <Card>
      <CardContent>
        <Typography variant="body1">
          Valor Garantia: {warrantyValue}
        </Typography>
        <Typography variant="body1">
          Inicio Vigência: {startDate}
        </Typography>
        <Typography variant="body1">
          Final Vigência: {endDate}
        </Typography>
        <Typography variant="body1">
          N Dias(s) Cobertura: {diffDays}
        </Typography>
      </CardContent>
    </Card>
  );
}
