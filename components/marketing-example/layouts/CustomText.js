import { Typography } from '@mui/material';
import React from 'react';

export function CustomText(props) {
   return (<Typography variant="h2" dangerouslySetInnerHTML={{ __html: props.data.html }} />)
}