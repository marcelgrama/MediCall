import React from 'react';
import connectPage from '../../store/connectPage';
import Page from '../../components/Page/';
import Rezultate from '../../components/pacient/rezultate/index';

const RezultatePage = () => (
  <Page>
    <Rezultate />
  </Page>
);

export default connectPage()(RezultatePage);
