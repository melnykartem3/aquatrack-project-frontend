import WaterItem from '../WaterItem/WaterItem';
import wateritems from './water.json';
import css from './WaterList.module.css';

const WaterList = ({ changeDate }) => {
  const getWaterItemsForDate = date => {
    return wateritems.filter(item => item.date === date);
  };

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
