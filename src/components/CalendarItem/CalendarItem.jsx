import { useDispatch } from 'react-redux';
import { setNewDate } from '../../redux/water/slice';
import css from './CalendarItem.module.css';
import clsx from 'clsx';

const CalendarItem = ({
  number,
  handleDateChange,
  currentMonthIndex,
  currentYear,
}) => {
  const classNameButton = clsx(
    css.button,
    number.value == 100 ? css.done : '',
    number.isToday ? css.today : '',
    number.isSelected ? css.selected : '',
  );
  const dispatch = useDispatch();
  const onDateClick = () => {
    handleDateChange(number.day, currentMonthIndex, currentYear);
    const date = new Date(Date.UTC(currentYear, currentMonthIndex, number.day));
    const isoDate = date.toISOString().split('T')[0]; // Формат YYYY-MM-DD
    dispatch(setNewDate(isoDate));
  };

  return (
    <div className={css.calendarItem}>
      <button className={classNameButton} onClick={onDateClick}>
        {number.day}
      </button>
      <div className={css.itemPercentage}>{number.value}%</div>
    </div>
  );
};

export default CalendarItem