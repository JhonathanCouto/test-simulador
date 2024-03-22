'use client';

import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


type Props = {
  children: React.ReactNode;
};

export function LocalizationProvider({ children }: Props) {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </MuiLocalizationProvider>
  )
}