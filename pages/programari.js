import React from 'react';
import connectPage from '../store/connectPage';
import Page from '../components/Page/';
import Programari from '../components/Doctor/programari/';

class ProgramariPage extends React.Component {
  render() {
    return (
      <Page>
        <Programari />
      </Page>
    );
  }
}

export default connectPage()(ProgramariPage);
