import css from './WaterItem.module.css';
import Icon from '../Icon/Icon.jsx';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal.jsx';
import { useState } from 'react';

const WaterItem = ({ data, formatDate }) => {
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const time = formatDate(data.date);

  if (data < 1) {
    return;
  }

  return (
    <div className={css.container}>
      <Icon id="icon-glass" className={css.icon} width="32" height="32" />
      <div className={css.info}>
        <p className={css.ml}>{data.waterVolume}</p>
        <p className={css.time}>{time}</p>
      </div>
      <div className={css.iconsContainer}>
        <button className={css.button}>
          <Icon
            id="icon-change"
            className={css.iconChangeDelete}
            width="14"
            height="14"
          />
        </button>
        <button className={css.button} onClick={()=>openModal()}>
          <Icon
            id="icon-delete"
            className={css.iconChangeDelete}
            width="14"
            height="14"
          />
        </button>
      </div>
      <DeleteWaterModal modalIsOpen={modalIsOpen} closeModal={closeModal} waterId={data._id}></DeleteWaterModal>
    </div>
  );
};

export default WaterItem;
