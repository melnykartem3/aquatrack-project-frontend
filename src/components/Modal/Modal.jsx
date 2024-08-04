import ModalReact from 'react-modal';
import css from '../Modal/Modal.module.css';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';

const Modal = ({ modalIsOpen, closeModal, children }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(47, 47, 47, 0.6)',
    },
  };

  const modalClassName = clsx(
    css.modal,
    css.reactModal_Content,
  );

  const overlayClassName = clsx(
    css.ReactModal__Overlay,
    modalIsOpen && css.isOpen,
  );

  return (
    <ModalReact
      isOpen={modalIsOpen}
      overlayClassName={overlayClassName}
      className={modalClassName}
      closeTimeoutMS={300}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        <IoClose className={css.closeIcon} />
      </button>
      {children}
    </ModalReact>
  );
};

export default Modal;
