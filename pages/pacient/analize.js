import React from 'react';
import connectPage from '../../store/connectPage';
import Page from '../../components/Page/';
import Analize from '../../components/pacient/analize/index';

const AnalizePage = () => (
  <Page>
    <Analize />
  </Page>
);

export default connectPage()(AnalizePage);
