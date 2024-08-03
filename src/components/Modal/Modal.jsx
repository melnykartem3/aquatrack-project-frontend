import ModalReact from 'react-modal';
import css from "./Modal.module.css"
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';

const Modal = ({ modalIsOpen, closeModal, children }) => {

  const modalClassName = clsx(
    css.modal,
  );

  const overlayClassName = clsx(
    css.ReactModal__Overlay,
    modalIsOpen && css.isOpen,
  );

  const buttonClass = clsx(
    css.button
  );

  return (
    <ModalReact
      isOpen={modalIsOpen}
      overlayClassName={overlayClassName}
      className={modalClassName}
      closeTimeoutMS={300}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
    >
      <button className={buttonClass} onClick={() => closeModal()}>
        <IoClose />
      </button>
      {children}
    </ModalReact>
  )
}

export default Modal