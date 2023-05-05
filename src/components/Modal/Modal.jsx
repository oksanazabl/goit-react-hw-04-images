import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, modalImage }) => {
useEffect(() => {
const handleKeyDown = event => {
if (event.code === 'Escape') {
onClose();
}
};

window.addEventListener('keydown', handleKeyDown);

return () => {
  window.removeEventListener('keydown', handleKeyDown);
};
}, [onClose]);

const handleBackdropClick = event => {
if (event.target === event.currentTarget) {
onClose();
}
};

return createPortal(
<div className={css.Overlay} onClick={handleBackdropClick}>
<div className={css.Modal}>
<img src={modalImage.largeImageURL} alt="" width="800px" />
</div>
</div>,
modalRoot
);
};

Modal.propTypes = {
onClose: PropTypes.func.isRequired,
modalImage: PropTypes.shape({
largeImageURL: PropTypes.string.isRequired,
}).isRequired,
};

export default Modal;






