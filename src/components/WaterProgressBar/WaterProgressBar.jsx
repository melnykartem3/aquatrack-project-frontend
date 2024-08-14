import { useSelector } from 'react-redux';
import css from './WaterProgressBar.module.css';
import {selectChoosenDate, selectDailyItems } from '../../redux/water/selectors';
import { selectUser } from '../../redux/auth/selectors';
import { useTranslation } from 'react-i18next';

const WaterProgressBar = () => {
  const { t } = useTranslation();
 const formatDate = (date) => {
    const d = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${d.getDate()}, ${monthNames[d.getMonth()]}`;
  };
  const choosenDate = useSelector(selectChoosenDate);
  const currentDate = new Date().toISOString().split('T')[0];
  const waterByDay = useSelector(selectDailyItems)  || 0;
  const totalWaterVolume = waterByDay.reduce((sum, item) => sum + item.waterVolume, 0);
  const user = useSelector(selectUser);
  let persentage = Math.min((totalWaterVolume / (user.waterRate * 1000)) * 100, 100); 
  persentage = persentage.toFixed(0);
  const thumbValueClass = persentage === '0' || persentage === '50' || persentage === '100' ? `${css.thumb_value} ${css.hidden}` : css.thumb_value;
  return (
    <div className={css.waterProgressBar_container}>
      <h2 className={css.waterProgressBar_h2}>{choosenDate === currentDate ? t('waterProgressBar.today') : formatDate(choosenDate)}</h2>
      <div className={css.waterProgressBar}>
        <div className={css.progress} style={{ width: `${persentage}%` }}></div>
        <div className={css.thumb} style={{ left: `${persentage}%` }}>
          <div className={thumbValueClass}>{`${persentage}%`}</div>
        </div>
      </div>
      <div className={css.progress_labels}>
        <span>0%</span>
        <spanc className={css.label}>50%</spanc>
        <span>100%</span>
      </div>
    </div>
  );
};

export default WaterProgressBar;

