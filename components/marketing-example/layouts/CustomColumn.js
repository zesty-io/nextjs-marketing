import React from 'react';
import { Grid } from "@mui/material";

export function CustomColumn(props) {
  return (
    <Grid item>
      {props.children}
    </Grid>
  );
}