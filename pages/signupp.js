import React from 'react';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import SignUpPacient from '../components/SignUpPacient';

class SignUpPacientPage extends React.Component {
  render() {
    return (
      <Page>
        <SignUpPacient />
      </Page>
    );
  }
}

export default connectPage()(SignUpPacientPage);
