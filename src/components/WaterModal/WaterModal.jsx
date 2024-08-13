import Modal from "../Modal/Modal";
import WaterForm from "../WaterForm/WaterForm";
import css from './WaterModal.module.css';
import { useTranslation } from 'react-i18next';

const WaterModal = ({
  waterModalOpen,
  closeWaterModal,
  operationType,
  item
}) => {
  const { t } = useTranslation();
  const title = operationType === 'add' ? t('waterModal.addWaterTitle') : t('waterModal.editWaterTitle');
  const value = operationType === 'add' ? t('waterModal.chooseValue') : t('waterModal.correctData');

  return (
    <Modal modalIsOpen={waterModalOpen} closeModal={closeWaterModal}>
      <div className={css.waterModal}>
        <p className={css.modalTitle}>{title}</p>
        <p className={css.modalValue}>{value}</p>
        <WaterForm operationType={operationType} closeWaterModal={closeWaterModal} item={item} />
      </div>
    </Modal>
  );
};

export default WaterModal;

// - заголовок, зміст якого залежить від отриманих props, що мають містити інформацію щодо типу операції "add" або "edit"
// - WaterForm