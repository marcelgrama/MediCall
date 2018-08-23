import React from 'react';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import LogInMediCall from '../components/LogInMediCall/';

class LogInMediCallPage extends React.Component {
  render() {
    return (
      <Page>
        <LogInMediCall />
      </Page>
    );
  }
}

export default connectPage()(LogInMediCallPage);
