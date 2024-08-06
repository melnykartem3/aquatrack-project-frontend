import ModalReact from 'react-modal';
import css from '../Modal/Modal.module.css';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';

const Modal = ({ modalIsOpen, closeModal, children }) => {
  // const customStyles = {
  //   overlay: {
  //     backgroundColor: 'rgba(47, 47, 47, 0.6)',
      
  //   },
  // };

  const overlayClass = clsx(
    css.ReactModal_Overlay,
    modalIsOpen && css.isOpen
  )

  return (
    <ModalReact
      isOpen={modalIsOpen}
      closeTimeoutMS={300}
      overlayClassName={overlayClass}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={css.reactModal_Content}
      bodyOpenClassName={css.ReactModal__Body} 
    >
      <button className={css.closeBtn} onClick={closeModal}>
        <IoClose className={css.closeIcon} />
      </button>
      {children}
    </ModalReact>
  );
};

export default Modal;
