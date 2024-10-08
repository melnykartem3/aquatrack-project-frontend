import WaterItem from '../WaterItem/WaterItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchWaterListDaily } from '../../redux/water/operations.js';
import css from './WaterList.module.css';
import { isSameDay } from 'date-fns';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const WaterList = ({ changeDate, userId }) => {
  const { t } = useTranslation();
  const formatDate = date => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const today = formatDate(new Date());
    if (!changeDate || isSameDay(changeDate, today)) {
      setDate(today);
    } else {
      setDate(formatDate(changeDate));
    }
  }, [changeDate]);

  const dispatch = useDispatch();

  const wateritems = useSelector(state => state.water.dailyItems.dayItems);

  useEffect(() => {
    dispatch(fetchWaterListDaily({ userId, date }));
  }, [dispatch, userId, date]);

  if (!wateritems || wateritems.length === 0) {
    return (
      <h3 className={css.title}>
      {t('noConsumedWater')}
    </h3>
    );
  }

  const formatLocalTime = isoDate => {
    return moment(isoDate).format('hh:mm A');
  };

  return (
    <>
      <ul className={css.list}>
        {wateritems.map(item => (
          <li className={css.listItem} key={item._id}>
            <WaterItem data={item} formatTime={formatLocalTime} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default WaterList;
