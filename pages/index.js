import PropTypes from 'prop-types';

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Page from '../components/Page/';
import connectPage from '../store/connectPage';

class App extends React.Component {
  render() {
    return (
      <Page authRequired title="Home Page">
        <Typography variant="headline">Welcome</Typography>
      </Page>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connectPage()(App);
