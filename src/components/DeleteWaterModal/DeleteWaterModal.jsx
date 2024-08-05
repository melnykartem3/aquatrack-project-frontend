import Modal from "../Modal/Modal";
import clsx from "clsx";
import css from "./DeleteWaterModal.module.css"

const DeleteWaterModal = ({modalIsOpen,closeModal}) => {
  const buttonColorClass  = clsx(
    css.btn,
    css.btnColor
  );

  const buttonGreyClass = clsx(
    css.btn,
    css.btnTransparent
  );

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
    <div className={css.modal}>
        <h3 className={css.modalHead}>Delete entry</h3>
        <p className={css.modalText}>Are you sure you want to delete the entry?</p>
        <div className={css.logOutButtons}>
                <button className={buttonColorClass}>Delete</button>
                <button className={buttonGreyClass} onClick={()=>closeModal()}>Cancel</button>
        </div>
    </div>
    </Modal>
  )
};

export default DeleteWaterModal;