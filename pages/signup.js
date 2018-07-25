import React from 'react';

import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import SignUp from '../components/SignUp/';

const SignUpPage = () => (
  <Page>
    <SignUp />
  </Page>
);

export default connectPage()(SignUpPage);
