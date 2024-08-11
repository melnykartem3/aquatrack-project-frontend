import css from './WaterItem.module.css';
import Icon from '../Icon/Icon.jsx';

const WaterItem = ({ data, formatDate }) => {

  const time = formatDate(data.date);

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
        <button className={css.button}>
          <Icon
            id="icon-change"
            style={{ fill: 'none', stroke: '#2f2f2f' }} 
            width="14"
            height="14"
          />
        </button>
        <button className={css.button}>
          <Icon
            id="icon-delete"
            style={{ fill: 'none', stroke: '#2f2f2f' }} 
            width="14"
            height="14"
          />
        </button>
      </div>
    </div>
  );
};

export default WaterItem;
