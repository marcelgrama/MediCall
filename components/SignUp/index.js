import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grow from '@material-ui/core/Grow';
import LinearProgress from '@material-ui/core/LinearProgress';
import { authSignup } from '../../api/endpoints';
import fetch from '../../services/fetch';

import ErrorMsg from '../ErrorMsg';

import { signUpSchema } from '../../services/validation';
import {
  OutterGrid,
  InnerGrid,
  ProgressWrapper,
  StyledPaper,
  StyledLink
} from './style';

const SignUp = class extends React.Component {
  constructor(props) {
    super(props);
    this.formData = {};
    this.state = {
      error: ''
    };
  }
  onInputChange = e => {
    const { value, name } = e.target;
    this.formData[name] = value;
  };

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.signIn();
    }
  };

  signUp = () => {
    const validationResult = signUpSchema.validate(this.formData);
    if (validationResult.error) {
      this.setState({ error: validationResult.error.details[0].message });
    } else {
      this.setState({ error: '' });
      fetch.post(authSignup, this.formData).then(response => {
        const { error } = response.data;
        if (error) {
          this.setState({ error });
        } else {
          this.setState(this.initialState);
        }
      });
      setTimeout(
        Router.push({
          pathname: '/signin'
        }),
        1500
      );
    }
  };

  render() {
    const { loading } = this.props;

    return (
      <OutterGrid
        container
        alignItems="center"
        direction="column"
        justify="center"
        className="main-grid"
        spacing={0}
      >
        <StyledPaper>
          <ProgressWrapper>{loading ? <LinearProgress /> : ''}</ProgressWrapper>
          <InnerGrid container direction="column" spacing={16}>
            <Grid item>
              <Link href="/">
                <StyledLink>a</StyledLink>
              </Link>
            </Grid>
            <Grid item>
              <TextField
                autoFocus
                name="username"
                label="Username"
                onChange={this.onInputChange}
                onKeyPress={this.onKeyPress}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                type="email"
                name="email"
                onChange={this.onInputChange}
                onKeyPress={this.onKeyPress}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={this.onInputChange}
                onKeyPress={this.onKeyPress}
                autoComplete="current-password"
                fullWidth
              />
            </Grid>

            <Grid item>
              <Button
                variant="raised"
                onClick={this.signUp}
                color="primary"
                fullWidth
              >
                Sign up
              </Button>
            </Grid>
            {this.state.error ? (
              <Grow in>
                <Grid item>
                  <ErrorMsg justify="center">{this.state.error}</ErrorMsg>
                </Grid>
              </Grow>
            ) : null}
          </InnerGrid>
        </StyledPaper>
      </OutterGrid>
    );
  }
};

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  redirectUrl: PropTypes.string
};
SignUp.defaultProps = {
  redirectUrl: ''
};
const mapStateToProps = state => ({
  loading: state.Loading
});
export default connect(mapStateToProps)(SignUp);
