import css from './WaterItem.module.css';
import Icon from '../Icon/Icon.jsx';
import WaterModal from '../WaterModal/WaterModal.jsx';
import { useState } from 'react';

const WaterItem = ({ data, formatDate }) => {
  const [showWaterModal, setShowWaterModal] = useState(false);
  const [operationType, setOperationType] = useState('edit');
  const time = formatDate(data.date);
const onOpenWaterModal = (type) => {
  setOperationType(type);
  setShowWaterModal(true);
  };
  const onCloseWaterModal = () => {
    setShowWaterModal(false);
  };
  if (data < 1) {
    return;
  }

  return (
      <div className={css.container}>
        <Icon id="icon-glass" className={css.icon} width="32" height="32" />
        <div className={css.info}>
          <p className={css.ml}>{data.waterVolume} ml</p>
          <p className={css.time}>{time}</p>
        </div>
        <div className={css.iconsContainer}>
          <button className={css.button} onClick={() => onOpenWaterModal('edit')}>
            <Icon
              id="icon-change"
              className={css.iconChangeDelete}
              width="14"
              height="14"
            />
          </button>
          <button className={css.button}>
            <Icon
              id="icon-delete"
              className={css.iconChangeDelete}
              width="14"
              height="14"
            />
          </button>
        </div>
        <WaterModal waterModalOpen={showWaterModal} closeWaterModal={onCloseWaterModal} operationType={operationType}item={data} />
        </div>
  );
};

export default WaterItem;
