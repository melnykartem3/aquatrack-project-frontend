import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import css from './WaterDailyNorma.module.css';
import { selectUser } from '../../redux/auth/selectors';

const WaterDailyNorma = () => {
  const { t, i18n } = useTranslation();
  const user = useSelector(selectUser);
  const isUk = i18n.language === 'uk';

  return (
    <div className={css.waterDailyNorma_wrapper}>
      <p className={css.waterDailyNorma}>{user.waterRate} L</p>
      <p className={`${css.waterDailyNorma_text} ${isUk ? css.ukText : ''}`}>
        {t('waterDailyNorma.myDailyNorma')}
      </p>
    </div>
  );
};

export default WaterDailyNorma;
