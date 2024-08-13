import Modal from "../Modal/Modal";
import css from "./LogOutModal.module.css"
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useTranslation } from 'react-i18next';


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

  const { t } = useTranslation();

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={ closeModal}>
      <div className={css.modal}>
        <h3 className={css.modalHead}>{t('logOutModal.title')}</h3>
        <p className={css.modalText}>{t('logOutModal.text')}</p>
        <div className={css.logOutButtons}>
          <button className={buttonColorClass} onClick={handleClick}>
            {t('logOutModal.logOut')}
          </button>
          <button className={buttonGreyClass} onClick={() => closeModal()}>
            {t('logOutModal.cancel')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;