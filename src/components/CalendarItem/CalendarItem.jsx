import css from './CalendarItem.module.css';

const CalendarItem = ({ number }) => {
  return (
    <div className={css.calendarItem}>
      <button className={css.button}>{number.day}</button>
      <div className={css.itemPercentage}>{number.value}%</div>
    </div>
  );
}

export default CalendarItem