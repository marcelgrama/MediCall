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
import { TitleTypography } from './style';
import { HeadTypography } from './style';

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
          <Grid xs={12} sm={6}>
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
                  <TableCell> Nume </TableCell>
                  <TableCell> Prenume </TableCell>
                  <TableCell> Varsta </TableCell>
                  <TableCell> Diagnostic </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Nume </TableCell>
                  <TableCell> Prenume </TableCell>
                  <TableCell> Varsta </TableCell>
                  <TableCell> Diagnostic </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid xs={12} sm={6}>
            {' '}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(Pacienti);
