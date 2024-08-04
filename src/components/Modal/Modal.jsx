import ModalReact from 'react-modal';
import css from "./Modal.module.css";
import { IoClose } from 'react-icons/io5';


const Modal = ({ modalIsOpen, closeModal, children }) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(47, 47, 47, 0.6)',
    },
  };

  return (
    <ModalReact
      isOpen={modalIsOpen}
      closeTimeoutMS={300}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      className={css.reactModal_Content}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        <IoClose className={css.closeIcon} />
      </button>
      {children}
    </ModalReact>
  );
};

export default Modal