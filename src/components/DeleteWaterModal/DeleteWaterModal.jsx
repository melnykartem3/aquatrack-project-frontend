import Modal from "../Modal/Modal";
import clsx from "clsx";
import css from "./DeleteWaterModal.module.css";
import { useDispatch } from "react-redux";
import { deleteWater } from "../../redux/water/operations";
import toast from "react-hot-toast";

const DeleteWaterModal = ({modalIsOpen,closeModal,waterId}) => {

  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(waterId)
    dispatch(deleteWater(waterId)).unwrap()
         .then(() => {
           toast.success('You successfully delete a water record!');
      })
      .catch(error => {
        toast.error('Failed to delete water record!');
      });
  };

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
                <button className={buttonColorClass} onClick={()=>handleClick()}>Delete</button>
                <button className={buttonGreyClass} onClick={()=>closeModal()}>Cancel</button>
        </div>
    </div>
    </Modal>
  )
};

export default DeleteWaterModal;