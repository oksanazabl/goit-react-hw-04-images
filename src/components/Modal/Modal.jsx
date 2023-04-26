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
       if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const {modalImage}= this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClick} >
        <div className={css.Modal}>
        <img
            src={modalImage.largeUrl}
            alt=""
            width="500px"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
