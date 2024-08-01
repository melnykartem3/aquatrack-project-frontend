import ModalReact from 'react-modal';
// import css from "./Modal.module.css";
import { IoClose } from 'react-icons/io5';

const Modal = ({ modalIsOpen, closeModal, children }) => {

  return (
    <ModalReact
      isOpen={modalIsOpen}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      closeTimeoutMS={300}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
    >
      <button  onClick={() => closeModal()}>
        <IoClose />
      </button>
      {children}
    </ModalReact>
  )
}

export default Modal