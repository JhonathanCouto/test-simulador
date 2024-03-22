import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Summary } from '@/components/summary';
import { DateForm } from '@/components/date-form';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <DateForm />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Summary />
          </Grid>
        </Grid>
      </Box>
    </Container >
  );
}