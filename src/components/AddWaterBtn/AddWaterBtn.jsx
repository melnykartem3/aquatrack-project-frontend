import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import WaterModal from '../WaterModal/WaterModal';

const AddWaterBtn = ({ containerClassName, buttonClassName, iconClassName }) => {
  const [showWaterModal, setShowWaterModal] = useState(false);
  const [operationType, setOperationType] = useState('add');

  const onOpenWaterModal = (type) => {
    setOperationType(type);
    setShowWaterModal(true);
  };

  const onCloseWaterModal = () => {
    setShowWaterModal(false);
  };

  return (
    <div className={containerClassName}>
      <button type="button" className={buttonClassName} onClick={() => onOpenWaterModal('add')}>
        <FaPlus className={iconClassName} />
        Add Water
      </button>
      <WaterModal
        waterModalOpen={showWaterModal}
        closeWaterModal={onCloseWaterModal}
        operationType={operationType}
      />
    </div>
  );
};

export default AddWaterBtn;

