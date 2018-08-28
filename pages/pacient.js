import React from 'react';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import Pacient from '../components/pacient/index';

const PacientPage = () => (
  <Page>
    <Pacient />
  </Page>
);

export default connectPage()(PacientPage);
