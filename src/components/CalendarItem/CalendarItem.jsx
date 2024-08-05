import css from './CalendarItem.module.css';
import clsx from 'clsx';

const CalendarItem = ({ number }) => {
const classNameButton = clsx(
  css.button,
  number.value == 100 ? css.done : '',
  number.isToday ? css.today : '',
);
  

  return (
    <div className={css.calendarItem}>
      <button className={classNameButton}>{number.day}</button>
      <div className={css.itemPercentage}>{number.value}%</div>
    </div>
  );
}

export default CalendarItem