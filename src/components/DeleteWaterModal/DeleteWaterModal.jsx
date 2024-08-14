import Modal from "../Modal/Modal";
import clsx from "clsx";
import css from "./DeleteWaterModal.module.css";
import { useDispatch } from "react-redux";
import { deleteWater } from "../../redux/water/operations";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const DeleteWaterModal = ({ modalIsOpen, closeModal, waterId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteWater(waterId)).unwrap()
      .then(() => {
        toast.success(t('deleteModal.success'));
      })
      .catch(error => {
        toast.error(t('deleteModal.error'));
      });
  };

  const buttonColorClass = clsx(
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
        <h3 className={css.modalHead}>{t('deleteModal.header')}</h3>
        <p className={css.modalText}>{t('deleteModal.text')}</p>
        <div className={css.logOutButtons}>
          <button className={buttonColorClass} onClick={handleClick}>
            {t('deleteModal.delete')}
          </button>
          <button className={buttonGreyClass} onClick={closeModal}>
            {t('deleteModal.cancel')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteWaterModal;