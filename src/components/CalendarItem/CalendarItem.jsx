import css from './CalendarItem.module.css';

const CalendarItem = ({ number }) => {
  return (
    <div className={css.calendarItem}>
      <button className={css.button}>{number}</button>
      <div className={css.itemPercentage}>100%</div>
    </div>
  );
}

export default CalendarItem