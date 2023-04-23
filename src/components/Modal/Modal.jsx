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

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.onClose();
    }
  };


  render() {
    return createPortal(
      <div className={css.Overlay} >
        <div className={css.Modal}>
        <img src={this.props.pic} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
