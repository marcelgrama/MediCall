import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { removeGeneralError } from '../../actions/error';

import { StyledSnackBar } from './style';

class Snackbars extends Component {
  handleClose = () => {
    this.props.dispatch(removeGeneralError());
  };
  render() {
    return (
      <StyledSnackBar
        type="error"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        key={this.props.error}
        SnackbarContentProps={{
          className: 'error-snackbar-content'
        }}
        open={!!this.props.error}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message={this.props.error}
        action={[
          <IconButton
            key="close-btn"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

Snackbars.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  error: state.Error,
  success: state.Success
});

export default connect(mapStateToProps)(Snackbars);
