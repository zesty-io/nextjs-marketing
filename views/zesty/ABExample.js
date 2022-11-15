/**
  * Zesty.io Content Model Component
  * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
  *
  * Label: A/B
  * Name: a_b_example
  * Model ZUID: 6-8eadb7dcf1-8k1m7j
  * File Created On: Tue Nov 15 2022 08:35:51 GMT-0500 (Eastern Standard Time)
  *
  * Model Fields:
  *
   * title (text)
 * content (wysiwyg_basic)
 * image (images)
  *
  * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
  * images are objects {content.image_name.data[0].url}
  *
  * This file is expected to be customized; because of that, it is not overwritten by the integration script.
  * Model and field changes in Zesty.io will not be reflected in this comment.
  *
  * View and Edit this model's current schema on Zesty.io at https://8-80a8a5f897-6wr8s8.manager.zesty.io/schema/6-8eadb7dcf1-8k1m7j
  *
  * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
  * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
  */
 
 import React  from 'react';
 import { Typography, Box, Tabs, Tab, Button} from '@mui/material';
 import OpenInNewIcon from '@mui/icons-material/OpenInNew';
 import GitHubIcon from '@mui/icons-material/GitHub';
 import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
 import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
 import TabPanel from 'components/marketing-example/ui/TabPanel'
 
function tabProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

 
 function ABExample({ content }) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
    const viewInGithub = `https://github.com/zesty-io/nextjs-marketing/blob/main/views/zesty/ABExample.js`
    const editInZesty = `https://${process.env.zesty.instance_zuid}.manager.zesty.io/content/${content.meta.model.zuid}/${content.meta.zuid}`
     return (
        <>
            <Box sx={{ mt: 4 }}>
        
                <Button target="_blank" size="small" startIcon={<GitHubIcon />} sx={{float: 'right', mt: 1, ml:2}} variant="contained" href={viewInGithub}>View in Github</Button>
                <Button target="_blank" size="small" startIcon={<OpenInNewIcon />} sx={{float: 'right', mt: 1}} variant="outlined" href={editInZesty}>Edit Layouts Zesty</Button>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>A/B Example</Typography>
                <Typography sx={{mb: 3}}>Natively in Zesty A/B Headless Models can be connected to Page Models can deliver ad specific content, random content, or personalized content.
                </Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Basic Example" {...tabProps(0)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            </TabPanel>
        </>
     );
 }
 
 export default ABExample;
 