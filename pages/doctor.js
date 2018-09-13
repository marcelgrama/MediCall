import React from 'react';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import Doctor from '../components/Doctor/';

class DoctorPage extends React.Component {
  render() {
    return (
      <Page>
        <Doctor />
      </Page>
    );
  }
}

export default connectPage()(DoctorPage);
