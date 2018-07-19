import { connect } from 'react-redux';
import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ButtonStyle } from './style';

import { setAuthToken } from '../../services/sessionStore';
import ErrorMsg from '../ErrorMsg';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  callback() {
    alert('Hello');
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="red" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              News
            </Typography>
            <ButtonStyle color="inherit" onClick={this.callback}>
              Login
            </ButtonStyle>
          </Toolbar>
        </AppBar>
        <Typography align="center" variant="display4" gutterBottom>
          Welcome
        </Typography>
      </div>
    );
  }
}

export default connect()(Welcome);
