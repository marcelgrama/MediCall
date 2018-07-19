import React from 'react';
import PropTypes from 'prop-types';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import Welcome from '../components/welcome/';

class WelcomePage extends React.Component {
  render() {
    return (
      <Page>
        <Welcome />
      </Page>
    );
  }
}

export default connectPage()(WelcomePage);
