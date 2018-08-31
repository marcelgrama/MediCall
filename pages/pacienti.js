import React from 'react';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import Pacienti from '../components/Pacienti/';

class PacientiPage extends React.Component {
  render() {
    return (
      <Page>
        <Pacienti />
      </Page>
    );
  }
}

export default connectPage()(PacientiPage);
