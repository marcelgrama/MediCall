import { connect } from 'react-redux';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ButtonStyleSignUp } from './style';
import { ButtonStyleLogIn } from './style';
import { LeftGrid } from './style';
import { RightGrid } from './style';

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
            <Typography variant="title" color="inherit">
              MediCall
            </Typography>
            <ButtonStyleSignUp color="inherit" onClick={this.callback}>
              Sign up
            </ButtonStyleSignUp>
            <ButtonStyleLogIn color="inherit" onClick={this.callback}>
              Log in
            </ButtonStyleLogIn>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <LeftGrid xs={12} sm={6}>
            <Typography align="left" variant="display4">
              Welcome!
            </Typography>
          </LeftGrid>
          <RightGrid xs={12} sm={6}>
            <Typography align="justify" variant="headline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              semper neque libero, at mattis mauris hendrerit sit amet. Integer
              vel nisl consectetur, porta diam semper, varius eros. Vestibulum
              scelerisque, nulla ac hendrerit malesuada, leo felis aliquam
              sapien, nec vulputate turpis nunc varius ante. Pellentesque porta
              mauris ex, at laoreet justo dignissim ut. Quisque magna arcu,
              egestas vel luctus a, commodo a sem. Proin felis magna, tincidunt
              vitae velit non, pulvinar accumsan purus. Mauris id neque justo.
            </Typography>
          </RightGrid>
        </Grid>
      </div>
    );
  }
}

export default connect()(Welcome);
