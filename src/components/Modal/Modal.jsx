import React from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalSt, Img } from './Modal.styled';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.showModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.showModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalSt>
          <Img src={this.props.largeImage} alt={this.props.largeImage} />
        </ModalSt>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
