import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import WaterModal from '../WaterModal/WaterModal';

const AddWaterBtn = ({ containerClassName, buttonClassName, iconClassName }) => {
  const { t } = useTranslation();
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
        {t('addWaterBtn.addWater')}
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

