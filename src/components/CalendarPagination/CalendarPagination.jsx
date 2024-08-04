import css from './CalendarPagination.module.css';

const CalendarPagination = () => {
  return (
    <div className={css.calendarHeader}>
      <span className={css.month}>Month</span>
      <span className={css.data}> April, 2024</span>
    </div>
  );
};

export default CalendarPagination;
