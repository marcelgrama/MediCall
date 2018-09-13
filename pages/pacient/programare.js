import React from 'react';
import connectPage from '../../store/connectPage';
import Page from '../../components/Page/';
import Programare from '../../components/pacient/programare/index';

const ProgramarePage = () => (
  <Page>
    <Programare />
  </Page>
);

export default connectPage()(ProgramarePage);
