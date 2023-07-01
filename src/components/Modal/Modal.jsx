import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal');

export class Modal extends Component {
    
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalStyled>
          <img src={this.props.largeImage} alt={this.props.largeImage} />
        </ModalStyled>
      </ModalOverlay>,
      modalRoot
    );
  }
}