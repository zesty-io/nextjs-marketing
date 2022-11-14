import { Typography } from '@mui/material';
import React from 'react';

export function CustomTextarea(props) {
   return (<Typography variant="body" dangerouslySetInnerHTML={{ __html: props.data.html }} />)
}