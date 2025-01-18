'use client';

import { useState, useEffect } from 'react';
import NRIC from './nric';
import { CardContent, CardActions, Button, Grid2 } from '@mui/material';
import { AppPanel } from './app-panel';

export function AppNric() {
  const [date, setDate] = useState<Date | null>(null);
  const randomDate = date ? date.toLocaleDateString('en-GB') : '';
  const nric = date ? NRIC.GenerateNric(date).value : '';
  const fin = date ? NRIC.GenerateFin(date).value : '';

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <AppPanel panelTitle="Singapore NRIC Generator">
      <CardContent>
        <p>Random Date: {randomDate}</p>
        <p>NRIC: {nric}</p>
        <p>FIN: {fin}</p>
      </CardContent>
      <CardActions>
        <Grid2 container>
          <Grid2>
            <Button
              className="font-normal"
              type="button"
              variant="contained"
              size="small"
              onClick={() => setDate(NRIC.getRandomDate())}
            >
              Generate
            </Button>
          </Grid2>
        </Grid2>
      </CardActions>
    </AppPanel>
  );
}
