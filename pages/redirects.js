import React from 'react';

import { fetchZestyPage } from 'lib/zesty/fetchPage';
import { ZestyView } from 'components/zesty/ZestyView';

// main is used here, its a base for layout that uses Material UI (mui), delete it if you dont want it, and just return <ZestyView content={props} />
import Main from 'layout/Main';


export default function Redirects(props) {
  return (
    <Main>
      Redirects
    </Main>
  )
}
