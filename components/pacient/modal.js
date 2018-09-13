import { connect } from 'react-redux';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { ButtonStyle } from './style';

const divStyle = {
  height: '55px',
  backgroundcolor: '#ffffff'
};

class SimpleModal extends React.Component {
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  state = {
    open: false
  };
  render() {
    return (
      <div style={divStyle}>
        <ButtonStyle
          variant="contained"
          color="default"
          onClick={this.handleOpen}
        >
          Adauga o programare
        </ButtonStyle>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={divStyle}>
            <Typography>vghdg</Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

export default connect()(SimpleModal);
