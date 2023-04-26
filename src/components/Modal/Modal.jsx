import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      return this.props.onClose();
    }
  };

  handleBackdropClick = event => {
       if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const {modalImage}= this.props;
    return createPortal(
      <div className={css.Overlay} nClick={this.handleBackdropClick} >
        <div className={css.Modal}>
        <img
            src={modalImage.largeUrl}
            alt={modalImage.alt}
            width="500px"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
