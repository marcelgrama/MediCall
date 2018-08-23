import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Password, StyledTextField, StyledSelect, StyledButton } from './style';

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: ''
    };
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
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
            <StyledTextField id="nume" label="Nume" margin="normal" />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField
              id="prenume"
              label="Prenume"
              margin="normal"
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField id="email" label="Email" margin="normal" />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledTextField
              id="telefon"
              label="Telefon"
              margin="normal"
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <FormControl>
              <InputLabel htmlFor="age-simple">Clinica</InputLabel>
              <StyledSelect
                native
                value={this.state.age}
                onChange={this.handleChange('age')}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple'
                }}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </StyledSelect>
            </FormControl>{' '}
          </Grid>
          <Grid item>
            {' '}
            <Password
              id="password-input"
              label="Parola"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />{' '}
          </Grid>

          <Grid item>
            {' '}
            <StyledButton variant="contained" color="primary">
              Confirma
            </StyledButton>{' '}
          </Grid>
        </Grid>
      </div>
    );
  }
}

MultipleSelect.propTypes = {};

export default MultipleSelect;
