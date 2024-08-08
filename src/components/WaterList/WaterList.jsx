import WaterItem from '../WaterItem/WaterItem';
// import wateritems from './water.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchWaterListDaily} from '../../redux/water/operations.js'
import css from './WaterList.module.css';

const WaterList = ({ changeDate }) => {

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  
  const formattedDate = formatDate(changeDate);
  console.log(formattedDate);

  const formattedToday = formatDate(new Date());
  console.log(formattedToday);
  
  const dispatch = useDispatch();
  const wateritems = useSelector((state) => state.water.dailyItems);

  const getWaterItemsForDate = date => {
    return wateritems.filter(item => item.date === date);
  };

  const userId = '66b37db860445d4b5699e7ac';

  useEffect(() => {
    dispatch(fetchWaterListDaily({ formattedToday, userId }));
  }, [dispatch, formattedToday]);

  const filteredWaterItems = getWaterItemsForDate(changeDate);

  if (filteredWaterItems.length < 1) {
    return (
      <h3 className={css.title}>
        There is no consumed water for the selected day
      </h3>
    );
}


  return (
    <>
      <ul className={css.list}>
        {filteredWaterItems.map(item => (
          <li className={css.listItem} key={item.id}>
            <WaterItem data={item} />
          </li>
        ))}
      </ul>
    </>
  );
}


export default WaterList;
