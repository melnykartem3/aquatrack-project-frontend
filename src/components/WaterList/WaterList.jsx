import WaterItem from '../WaterItem/WaterItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchWaterList} from '../../redux/water/operations.js'
import css from './WaterList.module.css';

const WaterList = ({ changeDate, userId }) => {
  const dispatch = useDispatch();
  const wateritems = useSelector((state) => state.water.dailyItems);

  const getWaterItemsForDate = date => {
    return wateritems.filter(item => item.date === date);
  };

  useEffect(() => {
    dispatch(fetchWaterList(userId));
  }, [dispatch, userId]);

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
};

export default WaterList;
