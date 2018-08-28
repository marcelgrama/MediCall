import React from 'react';
import connectPage from '../../store/connectPage';
import Page from '../../components/Page/';
import Notificari from '../../components/pacient/notificari/index';

const NotificariPage = () => (
  <Page>
    <Notificari />
  </Page>
);

export default connectPage()(NotificariPage);
