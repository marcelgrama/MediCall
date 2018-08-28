import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';
import Grow from '@material-ui/core/Grow';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Password, StyledTextField, StyledSelect, StyledButton } from './style';
import { authsignUpDoctor } from '../../api/endpoints';
import fetch from '../../services/fetch';
import ErrorMsg from '../ErrorMsg';
import { signUpDoctor } from '../../services/validation';

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.formData = {};
    this.state = {
      age: ''
    };
  }
  onInputChange = e => {
    const { value, name } = e.target;
    console.log(value, name);
    this.formData[name] = value;
  };
  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.signIn();
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  signUpDoctor = () => {
    const validationResult = signUpDoctor.validate(this.formData);
    if (validationResult.error) {
      /*this.setState({ error: validationResult.error.details[0].message });*/
      console.log(validationResult.error.details[0].message);
    } else {
      this.setState({ error: '' });
      fetch.post(authsignUpDoctor, this.formData).then(response => {
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
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              MediCall
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container direction="column" alignItems="center">
          <Grid item>
            {' '}
            <StyledTextField
              id="nume"
              label="Nume"
              margin="normal"
              name="Nume"
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField
              id="prenume"
              label="Prenume"
              margin="normal"
              name="Prenume"
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField
              id="email"
              label="Email"
              margin="normal"
              name="Email"
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField
              id="telefon"
              label="Telefon"
              margin="normal"
              name="Telefon"
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            />{' '}
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel htmlFor="age-simple">Clinica</InputLabel>
              <StyledSelect
                native
                value={this.state.age}
                name="Clinica"
                onChange={this.onInputChange}
                onKeyPress={this.onKeyPress}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </StyledSelect>
            </FormControl>
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField
              id="specializare"
              label="Specializare"
              margin="normal"
              name="Specializare"
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField
              id="cod"
              label="Cod Special"
              margin="normal"
              name="Cod Special"
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <Password
              id="password-input"
              label="Parola"
              type="password"
              autoComplete="current-password"
              margin="normal"
              name="Parola"
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            />{' '}
          </Grid>

          <Grid item>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={this.signUpDoctor}
              onChange={this.onInputChange}
              onKeyPress={this.onKeyPress}
            >
              Confirma
            </StyledButton>
          </Grid>

          {this.state.error ? (
            <Grow in>
              <Grid item>
                <ErrorMsg justify="center">{this.state.error}</ErrorMsg>
              </Grid>
            </Grow>
          ) : null}
        </Grid>
      </div>
    );
  }
}
MultipleSelect.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  redirectUrl: PropTypes.string
};
MultipleSelect.defaultProps = {
  redirectUrl: ''
};

MultipleSelect.propTypes = {};

export default MultipleSelect;
