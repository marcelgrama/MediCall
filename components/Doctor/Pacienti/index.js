import { connect } from 'react-redux';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import List from '@material-ui/icons/List';
import {
  TitleTypography,
  HeadTypography,
  LeftGrid,
  MenuListStyle,
  RightGrid
} from './style';

class Pacienti extends React.Component {
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
        <Grid container spacing={24}>
          <LeftGrid>
            <MenuListStyle>
              <Link href="../../doctor">
                <MenuItem selected>
                  <Home />
                  <ListItemText inset primary="Home" />
                </MenuItem>
              </Link>
              <Divider />
              <Link href="../../pacienti">
                <MenuItem>
                  <List />
                  <ListItemText inset primary="Pacienti" />
                </MenuItem>
              </Link>
              <Divider />
              <Link href="../../programari">
                <MenuItem>
                  <List />
                  <ListItemText inset primary="Programari noi" />
                </MenuItem>
              </Link>
            </MenuListStyle>
          </LeftGrid>
          <RightGrid>
            <TitleTypography variant="display1">Pacienti</TitleTypography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <HeadTypography color="primary" variant="title">
                      Nume
                    </HeadTypography>
                  </TableCell>
                  <TableCell>
                    <HeadTypography color="primary" variant="title">
                      Prenume
                    </HeadTypography>
                  </TableCell>
                  <TableCell>
                    <HeadTypography color="primary" variant="title">
                      Varsta
                    </HeadTypography>
                  </TableCell>
                  <TableCell>
                    <HeadTypography color="primary" variant="title">
                      Diagnostic
                    </HeadTypography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Button>Nume</Button>
                  </TableCell>
                  <TableCell> Prenume </TableCell>
                  <TableCell> Varsta </TableCell>
                  <TableCell> Diagnostic </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button>Nume</Button>
                  </TableCell>
                  <TableCell> Prenume </TableCell>
                  <TableCell> Varsta </TableCell>
                  <TableCell> Diagnostic </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </RightGrid>
        </Grid>
      </div>
    );
  }
}

export default connect()(Pacienti);
