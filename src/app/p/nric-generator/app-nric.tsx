'use client';

import React, { useState, useEffect } from 'react';
import NRIC from './nric';
import { CardContent, CardActions, Button, Grid2 } from '@mui/material';
import { AppPanel } from '@/@components';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const defaultValues = {
  date: new Date()
};

const schema = z.object({
  date: z.date().refine((val) => val !== null, 'Please fill in Date.')
});

export function AppNric() {
  const [nric, setNric] = useState('');
  const [fin, setFin] = useState('');

  const { handleSubmit, control, formState, setValue } = useForm({
    defaultValues,
    mode: 'all',
    resolver: zodResolver(schema)
  });
  const { errors } = formState;

  useEffect(() => {
    setNric(NRIC.GenerateNric(defaultValues.date).value);
    setFin(NRIC.GenerateFin(defaultValues.date).value);
  }, []);

  const onSubmit = (data: any) => {
    const { date } = data;
    setNric(NRIC.GenerateNric(date).value);
    setFin(NRIC.GenerateFin(date).value);
  };

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppPanel panelTitle="Singapore NRIC Generator" iconName="list">
            <CardContent>
              <Grid2 container spacing={2}>
                <Grid2>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <DatePicker
                        value={value}
                        onChange={(newValue) => {
                          if (newValue) {
                            onChange(newValue);
                            setValue('date', newValue);
                          }
                        }}
                        disableFuture
                        slotProps={{
                          textField: {
                            label: 'Date',
                            error: !!errors.date,
                            helperText: errors?.date?.message
                          }
                        }}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <p>NRIC: {nric}</p>
                  <p>FIN: {fin}</p>
                </Grid2>
              </Grid2>
            </CardContent>
            <CardActions>
              <Grid2 container>
                <Grid2>
                  <Button
                    className="mx-8"
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Generate
                  </Button>
                </Grid2>
              </Grid2>
            </CardActions>
          </AppPanel>
        </form>
      </Grid2>
    </Grid2>
  );
}
