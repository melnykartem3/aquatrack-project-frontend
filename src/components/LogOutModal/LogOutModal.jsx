import Modal from "../Modal/Modal";
import css from "./LogOutModal.module.css"
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import axios from "axios";

const LogOutModal = ({modalIsOpen,closeModal}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
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
    <Modal modalIsOpen={modalIsOpen} closeModal={()=>closeModal()}>
        <div className={css.modal}>
          <h3 className={css.modalHead}>Log out</h3>
          <p className={css.modalText}>Do you really want to leave?</p>
            <div className={css.logOutButtons}>
                <button className={buttonColorClass} onClick={handleClick}>Log out</button>
                <button className={buttonGreyClass} onClick={()=>closeModal()}>Cancel</button>
            </div>
        </div>
    </Modal>
  )
};

export default LogOutModal;