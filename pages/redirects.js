import React from 'react';
import { Typography, Box, Tabs, Tab, Button} from '@mui/material';
import Main from 'layout/Main';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Redirects(props) {

  const editInZesty = `https://${process.env.zesty.instance_zuid}.manager.zesty.io/seo`
  const githubLink = `https://github.com/zesty-io/nextjs-marketing/blob/main/lib/zesty/fetchRedirects.js`

  return (
    <Main>
       <Box sx={{ mt: 4 }}>
            
            <Button target="_blank" size="small" startIcon={<GitHubIcon />} sx={{float: 'right', mt: 1, ml:2}} variant="contained" href={githubLink}>View in Github</Button>
            <Button target="_blank" size="small" startIcon={<OpenInNewIcon />} sx={{float: 'right', mt: 1}} variant="outlined" href={editInZesty}>Edit Redirects Zesty</Button>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Redirects</Typography>
            <Typography sx={{mb: 3}}>Next.js Zesty starters are integrated to external editing in Zesty out of the box. This give marketers autnomy to control their websites without developers. 
            Developers follow this guide to connect an existing Next.js app to Zesty.io Redirects or launch a Zesty next starter.
            </Typography>
            
        </Box>
    </Main>
  )
}
