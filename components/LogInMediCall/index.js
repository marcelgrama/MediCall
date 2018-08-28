import Router from 'next/router';
import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import AppBar from '@material-ui/core/AppBar';
import Grow from '@material-ui/core/Grow';
import Toolbar from '@material-ui/core/Toolbar';
import {
  ButtonStyle,
  ButtonStyle2,
  TypographyStyle,
  FormControlStyled
} from './style';
import { signIn } from '../../actions/user';
import fetch from '../../services/fetch';
import { setAuthToken } from '../../services/sessionStore';
import { signInSchema } from '../../services/validation';
import { authSignin } from '../../api/endpoints';
import ErrorMsg from '../ErrorMsg';

class LogInMediCall extends React.Component {
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

  handlePageChange = () => {
    Router.push('/signupp');
  };
  signIn = () => {
    const validationResult = signInSchema.validate(this.formData);
    if (validationResult.error) {
      this.setState({ error: validationResult.error.details[0].message });
    } else {
      fetch.post(authSignin, this.formData).then(response => {
        const { error, authToken, ...userData } = response.data;

        if (authToken) {
          setAuthToken(authToken);
          this.props.dispatch(signIn(userData));
          if (this.props.redirectUrl) {
            Router.push(decodeURI(this.props.redirectUrl));
          } else {
            Router.push('/');
          }
        }
        if (error) {
          this.setState({ error });
        }
      });
    }
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    return (
      <div align="center">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              MediCall
            </Typography>
          </Toolbar>
        </AppBar>
        <TypographyStyle
          variant="display2"
          gutterBottom
          position="center"
          color="primary"
        >
          Autentificare MediCall
        </TypographyStyle>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControlStyled aria-describedby="weight-helper-text">
              <InputLabel htmlFor="adornment-e-mail">
                E-mail/Număr de telefon
              </InputLabel>
              <Input
                name="Email"
                label="Email"
                onChange={this.onInputChange}
                onKeyPress={this.onKeyPress}
              />
            </FormControlStyled>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="adornment-password">Parolă</InputLabel>
              <Input
                id="adornment-password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                label="Password"
                name="password"
                onChange={this.onInputChange}
                onKeyPress={this.onKeyPress}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        {this.state.error ? (
          <Grow in>
            <Grid item>
              <ErrorMsg justify="center">{this.state.error}</ErrorMsg>
            </Grid>
          </Grow>
        ) : null}
        <ButtonStyle variant="outlined" color="primary" onClick={this.signIn}>
          Autentificare
        </ButtonStyle>
        <Typography variant="subheading" gutterBottom>
          Nu ai cont?
        </Typography>

        <ButtonStyle2 variant="contained" onClick={this.handlePageChange}>
          Creează-ți propriul cont MediCall
        </ButtonStyle2>
      </div>
    );
  }
}

LogInMediCall.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  redirectUrl: PropTypes.string
};
LogInMediCall.defaultProps = {
  redirectUrl: ''
};
export default connect()(LogInMediCall);
