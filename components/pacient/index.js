import { connect } from 'react-redux';
import React from 'react';
import 'moment/locale/ro';
import moment from 'moment';
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
  SCalendar,
  ButtonStyle
} from './style';
import SimplePopover from './event';

SCalendar.setLocalizer(SCalendar.momentLocalizer(moment));
const messages = {
  allDay: 'Toata ziua',
  previous: '<',
  next: '>',
  today: 'azi',
  month: 'Luna',
  week: 'Saptamana',
  day: 'Ziua',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Intervalul de timp',
  event: 'Evenimentul'
};
moment().locale('ro');
class Pacient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          s: moment(new Date(2018, 8, 10, 18, 30)).format('LLL'),
          start: new Date(2018, 8, 10, 18, 30),
          end: new Date(2018, 8, 10, 19, 30),
          title: 'Programare la dentist'
        },
        {
          s: moment(new Date(2018, 8, 10, 14, 30)).format('LLL'),
          start: new Date(2018, 8, 10, 14, 30),
          end: new Date(2018, 8, 10, 16, 30),
          title: 'Programare la cardiolog'
        },
        {
          s: moment(new Date(2018, 8, 14, 14, 30)).format('LLL'),
          start: new Date(2018, 8, 14, 14, 30),
          end: new Date(2018, 8, 14, 16, 30),
          title: 'Programare la diabetolog'
        }
      ]
    };
    window.onload = function() {
      alert('Urmatoare programare: 20 Septembrie 2018 17:30');
    };
  }

  render() {
    return (
      <div>
        <AppBar position="relative">
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
            <Link href="../../pacient/programare">
              <ButtonStyle variant="contained" color="default">
                Adauga o programare
              </ButtonStyle>
            </Link>
            <SCalendar
              messages={messages}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: '26em' }}
              components={{
                event: SimplePopover
              }}
            />
          </RightGrid>
        </Grid>
      </div>
    );
  }
}

export default connect()(Pacient);
