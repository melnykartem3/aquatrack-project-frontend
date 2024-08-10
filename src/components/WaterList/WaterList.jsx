import WaterItem from '../WaterItem/WaterItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchWaterListDaily } from '../../redux/water/operations.js';
import css from './WaterList.module.css';
import { isSameDay } from "date-fns";
import { nanoid } from 'nanoid';

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
  
  const wateritems = useSelector((state) => state.water.dailyItems.data);

  useEffect(() => {
    dispatch(fetchWaterListDaily({ userId, date }));
  }, [dispatch, userId, date]);


  if (!wateritems) {
    return (
      <h3 className={css.title}>
        There is no consumed water for the selected day
      </h3>
    );
}

  return (
    <>
      <ul className={css.list}>
        {wateritems.map(item => (
          <li className={css.listItem} key={nanoid()}>
            <WaterItem data={item} formatDate={formatDate} />
          </li>
        ))}
      </ul>
    </>
  );
}


export default WaterList;
