import css from './WaterItem.module.css';
import Icon from '../Icon/Icon.jsx';

const WaterItem = ({ data }) => {
  if (data < 1) {
    return;
  }

  return (
    <div className={css.container}>
      <Icon id="icon-glass" className={css.icon} width="32" height="32" />
      <div className={css.info}>
        <p className={css.ml}>250 ml</p>
        <p className={css.time}>11:00 AM</p>
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
        <button className={css.button}>
          <Icon
            id="icon-delete"
            className={css.iconChangeDelete}
            width="14"
            height="14"
          />
        </button>
      </div>
    </div>
  );
};

export default WaterItem;
