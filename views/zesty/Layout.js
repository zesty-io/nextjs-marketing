/**
  * Zesty.io Content Model Component
  * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
  *
  * Label: Layouts
  * Name: layouts
  * Model ZUID: 6-d6b2919db2-b7wnxb
  * File Created On: Mon Nov 14 2022 14:20:32 GMT-0500 (Eastern Standard Time)
  *
  * Model Fields:
  *
   * title (text)
 * rich_text (wysiwyg_basic)
 * image (images)
 * image_wide (images)
 * external_url (link)
  *
  * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
  * images are objects {content.image_name.data[0].url}
  *
  * This file is expected to be customized; because of that, it is not overwritten by the integration script.
  * Model and field changes in Zesty.io will not be reflected in this comment.
  *
  * View and Edit this model's current schema on Zesty.io at https://8-80a8a5f897-6wr8s8.manager.zesty.io/schema/6-d6b2919db2-b7wnxb
  *
  * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
  * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
  */
 
 const codeStringNoComponents = `<AutoLayout content={content} />`
 const codeStringWithComponents = `
 import React from "react";
 
 import { AutoLayout } from "@zesty-io/react-autolayout";
 import { CustomTextarea } from "./CustomTextarea";
 import { CustomColumn } from "./CustomColumn";
 import { CustomRow } from "./CustomRow";
 
 export default function Page({ content }) {
     <AutoLayout content={content} components={{
         "textarea": CustomTextarea,
         "column": CustomColumn,
         "row": CustomRow
     }} />
 }
 `;

import React  from 'react';
import { AutoLayout } from "@zesty-io/react-autolayout";
import { Typography, Box} from '@mui/material';

import { CustomRow } from "components/marketing-example/layouts/CustomRow";
import { CustomColumn } from "components/marketing-example/layouts/CustomColumn";
import { CustomTextarea } from "components/marketing-example/layouts/CustomTextarea";
import { CustomText } from "components/marketing-example/layouts/CustomText";
import { CustomNode } from "components/marketing-example/layouts/CustomNode";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Layout({ content }) {
   
     return (
        <>
        <CustomColumn>ASDfsadfsdafasdf</CustomColumn>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>Layouts</Typography>
                <Typography>Layouts is drag-n-drop experience for Markters to control the layout of their pages. 
                        Layouts is installed from the <a href="https://www.zesty.io/marketplace/">Zesty Marketplace</a> and setup in next.js with 
                        an npm package <a href="https://www.npmjs.com/package/@zesty-io/react-autolayout">React Auto Layout by Zesty.io</a>
                </Typography>
                <Typography variant="h4" sx={{ my: 2 }}>Example without Custom Components or Styling</Typography>
            </Box>

            <SyntaxHighlighter showLineNumbers  language="javascript" style={nord}>
                {codeStringNoComponents}
            </SyntaxHighlighter>
            
            <Box sx={{ my: 4, p:2, border: '1px #ccc solid', borderRadius: '5px' }}>
                <AutoLayout content={content}  />
                
            </Box>
            <Typography variant="h4" sx={{ my: 2 }}>Example with Custom Components</Typography>
            <SyntaxHighlighter showLineNumbers  language="javascript" style={nord}>
                {codeStringWithComponents}
            </SyntaxHighlighter>
            <Box sx={{ my: 4, p:2, border: '1px #ccc solid', borderRadius: '5px' }}>
            <AutoLayout content={content} components={{
                    "wysiwyg_basic": CustomTextarea,
                    "text": CustomText,
                    "column": CustomColumn,
                    "row": CustomRow                   
                }} />
            </Box>
        </>
     );
 }
 
 