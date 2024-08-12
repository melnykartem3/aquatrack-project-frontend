import css from './WaterItem.module.css';
import Icon from '../Icon/Icon.jsx';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal.jsx';
import { useState } from 'react';
import WaterModal from '../WaterModal/WaterModal.jsx';

const WaterItem = ({ data, formatTime }) => {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [showWaterModal, setShowWaterModal] = useState(false);
  const [operationType, setOperationType] = useState('edit');
  const onOpenWaterModal = (type) => {
  setOperationType(type);
  setShowWaterModal(true);
  };
  const onCloseWaterModal = () => {
    setShowWaterModal(false);
  }; 
  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }


  const time = formatTime(data.date);

  if (data < 1) {
    return;
  }

  return (
    <div className={css.container}>
      <Icon id="icon-glass" style={{ stroke: 'none' }} width="32" height="32" />
      <div className={css.info}>
        <p className={css.ml}>{data.waterVolume} ml</p>
        <p className={css.time}>{time}</p>
      </div>
      <div className={css.iconsContainer}>
        <button className={css.button} onClick={() => onOpenWaterModal('edit')}>
          <Icon
            id="icon-change"
            style={{ fill: 'none', stroke: '#2f2f2f' }} 
            width="14"
            height="14"
          />
        </button>
        <button className={css.button} onClick={()=>openModal()}>
          <Icon
            id="icon-delete"
            style={{ fill: 'none', stroke: '#2f2f2f' }} 
            width="14"
            height="14"
          />
        </button>
      </div>
      <DeleteWaterModal modalIsOpen={modalIsOpen} closeModal={closeModal} waterId={data._id}></DeleteWaterModal>
      <WaterModal waterModalOpen={showWaterModal} closeWaterModal={onCloseWaterModal} operationType={operationType}item={data} />
    </div>
  );
};

export default WaterItem;

