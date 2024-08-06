import css from './WaterProgressBar.module.css';

const WaterProgressBar = () => {
  return (
    <div className={css.waterProgressBar_container}>
      <h2 className={css.waterProgressBar_h2}>Today</h2>
      <div className={css.waterProgressBar}>
        <div className={css.progress}></div>
        <div className={css.thumb}>
          <div className={css.thumb_value}>{`0%`}</div>
        </div>
      </div>
      <div className={css.progress_labels}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;

// значення процентів буде вираховуватися з загальної кількості випитої води за день/на денну норму, або підрахованого проценту отриманого з бекенду