"use client";

import React, { useState, useEffect } from "react";
import NRIC from "./nric";
import { CardContent, CardActions, Button, Grid2, IconButton, Snackbar, Autocomplete, TextField } from "@mui/material";
import { AppPanel } from "@/@components";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const defaultValues = {
  date: new Date(),
  quantity: 1,
};

const schema = z.object({
  date: z.date().refine((val) => val !== null, "Please fill in Date."),
  quantity: z.number().min(1, "Quantity must be at least 1").max(50, "Quantity cannot exceed 50"),
});

const quantities = Array.from({ length: 20 }, (_, index) => ({
  value: index + 1,
  label: String(index + 1),
}));

export function AppNric() {
  const [nrics, setNrics] = useState<string[]>([]);
  const [fins, setFins] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { handleSubmit, control, formState, setValue } = useForm({
    defaultValues,
    mode: "all",
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  useEffect(() => {
    setNrics([NRIC.GenerateNric(defaultValues.date).value]);
    setFins([NRIC.GenerateFin(defaultValues.date).value]);
  }, []);

  const onSubmit = (data: any) => {
    const { date, quantity } = data;

    const newNrics = Array.from({ length: quantity }, () => NRIC.GenerateNric(date).value);
    const newFins = Array.from({ length: quantity }, () => NRIC.GenerateFin(date).value);
    setNrics(newNrics);
    setFins(newFins);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setOpenSnackbar(true);
        setTimeout(() => setOpenSnackbar(false), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppPanel panelTitle="Singapore NRIC Generator" iconName="list">
            <CardContent>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 6 }}>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <DatePicker
                        value={value}
                        onChange={(newValue) => {
                          if (newValue) {
                            onChange(newValue);
                            setValue("date", newValue);
                          }
                        }}
                        disableFuture
                        slotProps={{
                          textField: {
                            label: "Date",
                            error: !!errors.date,
                            helperText: errors?.date?.message,
                            fullWidth: true,
                          },
                        }}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <Controller
                    name="quantity"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Autocomplete
                        options={quantities}
                        getOptionLabel={(option) => option.label}
                        value={quantities.find((option) => option.value === value) || undefined}
                        onChange={(_, newValue) => {
                          onChange(newValue ? newValue.value : 1);
                        }}
                        disableClearable
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Quantity"
                            error={!!errors.quantity}
                            helperText={errors?.quantity?.message}
                          />
                        )}
                      />
                    )}
                  />
                </Grid2>
              </Grid2>
            </CardContent>
            <CardActions
              sx={{
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 2,
                paddingBottom: 2,
                backgroundColor: "#f5f5f5",
              }}
            >
              <Grid2 container>
                <Grid2>
                  <Button className="normal-case" variant="contained" type="submit">
                    Generate
                  </Button>
                </Grid2>
              </Grid2>
            </CardActions>
            {nrics.length > 0 && (
              <CardContent>
                <Grid2 size={{ xs: 12 }}>
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 6 }} className="border border-blue-200 rounded-md p-4">
                      <p className="pb-2">NRIC:</p>
                      {nrics.map((nric, index) => (
                        <div key={index} className="flex justify-between pb-2 last:pb-0">
                          <span>{nric}</span>
                          <IconButton
                            aria-label={`Copy NRIC ${index + 1}`}
                            size="small"
                            onClick={() => copyToClipboard(nric)}
                          >
                            <ContentCopyOutlinedIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </div>
                      ))}
                    </Grid2>
                    <Grid2 size={{ xs: 6 }} className="border border-blue-200 rounded-md p-4">
                      <p className="pb-2">FIN:</p>
                      {fins.map((fin, index) => (
                        <div key={index} className="flex justify-between pb-2 last:pb-0">
                          <span>{fin}</span>
                          <IconButton
                            aria-label={`Copy FIN ${index + 1}`}
                            size="small"
                            onClick={() => copyToClipboard(fin)}
                          >
                            <ContentCopyOutlinedIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        </div>
                      ))}
                    </Grid2>
                  </Grid2>
                </Grid2>
              </CardContent>
            )}
          </AppPanel>
        </form>
      </Grid2>
      <Snackbar
        open={openSnackbar}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Grid2>
  );
}
