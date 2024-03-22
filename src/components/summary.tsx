"use client";

import { useDate } from '@/date/use-date';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { differenceInDays } from 'date-fns';

export function Summary() {
  const { dates: { startDate, endDate, warrantyValue } } = useDate();

  const formatCurrency = (value: string | null) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));
  };

  const formatDate = (date: string | number | Date | null) => {
    return date ? new Date(date).toLocaleDateString() : '';
  };

  const calculateCoverageDays = (startDate: string | number | Date | null, endDate: string | number | Date | null) => {
    return startDate && endDate ? differenceInDays(new Date(endDate), new Date(startDate)) : '';
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="body1">
          Valor Garantia: {formatCurrency(warrantyValue)}
        </Typography>
        <Typography variant="body1">
          Inicio Vigência: {formatDate(startDate)}
        </Typography>
        <Typography variant="body1">
          Final Vigência: {formatDate(endDate)}
        </Typography>
        <Typography variant="body1">
          N Dias(s) Cobertura: {calculateCoverageDays(startDate, endDate)}
        </Typography>
      </CardContent>
    </Card>
  );
}