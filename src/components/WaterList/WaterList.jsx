import WaterItem from '../WaterItem/WaterItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchWaterListDaily } from '../../redux/water/operations.js';
import css from './WaterList.module.css';
import { isSameDay } from "date-fns";
import moment from 'moment';

const WaterList = ({ changeDate, userId }) => {
  
  // форматування дати 
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  
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
  
  const wateritems = useSelector((state) => state.water.dailyItems.dayItems);

  useEffect(() => {
    dispatch(fetchWaterListDaily({ userId, date }));
  }, [dispatch, userId, date]);


  if (!wateritems || wateritems.length === 0) {
    return (
      <h3 className={css.title}>
        There is no consumed water for the selected day
      </h3>
    );
}

  const formatUTC = (isoDate) => {
    return moment(isoDate).utc().format('hh:mm A');
  }

  return (
    <>
      <ul className={css.list}>
        {wateritems.map(item => (
          <li className={css.listItem} key={item._id}>
            <WaterItem data={item} formatTime={formatUTC} />
          </li>
        ))}
      </ul>
    </>
  );
}


export default WaterList;

