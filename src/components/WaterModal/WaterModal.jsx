import Modal from "../Modal/Modal";
import WaterForm from "../WaterForm/WaterForm";
import css from './WaterModal.module.css';

const WaterModal = ({
  waterModalOpen,
  closeWaterModal,
  operationType,
}) => {
  const title = operationType === 'add' ? 'Add Water' : 'Edit the entered amount of water';
  const value = operationType === 'add' ? 'Choose a value:' : 'Correct entered data:';

  return (
    <Modal modalIsOpen={waterModalOpen} closeModal={closeWaterModal}>
      <div className={css.waterModal}>
        <p className={css.modalTitle}>{title}</p>
        <p className={css.modalValue}>{value}</p>
        <WaterForm operationType={operationType} closeWaterModal={closeWaterModal} />
      </div>
    </Modal>
  );
};

export default WaterModal

// - заголовок, зміст якого залежить від отриманих props, що мають містити інформацію щодо типу операції "add" або "edit"
// - WaterForm