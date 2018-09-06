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
import {
  MenuListStyle,
  LeftGrid,
  RightGrid,
  ButtonStyle,
  CloudDownloadStyled
} from './style';

class Pacient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
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
                <MenuItem>
                  <Home />
                  <ListItemText inset primary="Home" />
                </MenuItem>
              </Link>
              <Divider />
              <Link href="../../pacient/rezultate">
                <MenuItem selected>
                  <List />
                  <ListItemText inset primary="Rezultate" />
                </MenuItem>
              </Link>
            </MenuListStyle>
          </LeftGrid>
          <RightGrid>
            <Typography>Ultimele analize incarcate:</Typography>
            <ol>
              <li>
                <Typography>
                  Data: 16.08.2018
                  <ButtonStyle
                    variant="contained"
                    color="default"
                    href="../../pacient/rezultate/analiza.pdf"
                    target="_blank"
                  >
                    Deschide
                    <CloudDownloadStyled />
                  </ButtonStyle>{' '}
                </Typography>
              </li>
            </ol>
          </RightGrid>
        </Grid>
      </div>
    );
  }
}

export default connect()(Pacient);
