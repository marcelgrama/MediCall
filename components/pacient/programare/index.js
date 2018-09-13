import { connect } from 'react-redux';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import List from '@material-ui/icons/List';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {
  MenuListStyle,
  LeftGrid,
  RightGrid,
  STextField,
  StyledTextField,
  StyledSelect,
  StyledButton
} from './style';

class Pacient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    window.onload = function() {
      alert('Urmatoare programare: 15 Septembrie 2018 ora 17');
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
        <Grid container spacing={8}>
          <LeftGrid>
            <MenuListStyle>
              <Link href="../../pacient">
                <MenuItem selected>
                  <Home />
                  <ListItemText inset primary="Home" />
                </MenuItem>
              </Link>
              <Divider />
              <Link href="../../pacient/rezultate">
                <MenuItem>
                  <List />
                  <ListItemText inset primary="Rezultate" />
                </MenuItem>
              </Link>
            </MenuListStyle>
          </LeftGrid>
          <RightGrid>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                {' '}
                <form noValidate>
                  <TextField
                    id="date"
                    label="Data programarii"
                    type="date"
                    defaultValue="2018-09-19"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </form>{' '}
              </Grid>

              <Grid item>
                {' '}
                <form noValidate>
                  <STextField
                    id="time"
                    label="Ora programarii"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      step: 900 // 15 min
                    }}
                  />
                </form>{' '}
              </Grid>

              <Grid item>
                {' '}
                <FormControl>
                  <InputLabel htmlFor="age-simple">Medic</InputLabel>
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
                <StyledTextField
                  id="mesaj"
                  label="Mesaj"
                  margin="normal"
                />{' '}
              </Grid>
              <Link href="../../pacient">
                <Grid item>
                  {' '}
                  <StyledButton variant="contained" color="primary">
                    Confirma
                  </StyledButton>{' '}
                </Grid>
              </Link>
            </Grid>
          </RightGrid>
        </Grid>
      </div>
    );
  }
}

export default connect()(Pacient);
