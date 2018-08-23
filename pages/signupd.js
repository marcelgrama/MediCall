import React from 'react';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import SignUpDoctor from '../components/SignUpDoctor';

class SignUpDoctorPage extends React.Component {
  render() {
    return (
      <Page>
        <SignUpDoctor />
      </Page>
    );
  }
}

export default connectPage()(SignUpDoctorPage);
