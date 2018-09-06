import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { StyledChip } from './style';
import Popover from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';

class SimplePopover extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Tooltip
          title={`${this.props.event.title} ${this.props.event.s}`}
          placement="top-end"
        >
          <StyledChip label={this.props.event.title} />
        </Tooltip>

        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Typography>
            {this.props.event.title}, {this.props.event}
          </Typography>
        </Popover>
      </div>
    );
  }
}

SimplePopover.propTypes = {
  event: PropTypes.object.isRequired
};

export default connect()(SimplePopover);
