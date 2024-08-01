import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  return (
    <div className={css.waterDailyNorma_wrapper}>
      <p className={css.waterDailyNorma}>2 L</p>
      <p className={css.waterDailyNorma_text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma

// значення денної норми буде братися з redux user-dailyNorma