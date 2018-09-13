import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import { StyledChip } from './style';

class SimplePopover extends React.Component {
  render() {
    return (
      <div>
        <Tooltip
          title={`${this.props.event.title} ${this.props.event.s}`}
          placement="top-end"
        >
          <StyledChip label={this.props.event.title} />
        </Tooltip>
      </div>
    );
  }
}

SimplePopover.propTypes = {
  event: PropTypes.object.isRequired
};

export default connect()(SimplePopover);
