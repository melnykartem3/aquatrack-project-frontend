import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';
const CalendarNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const Calendar = () => {
  return (
    <div className={css.calendarContainer}>
      <div className={css.calendarHeader}>
        <span>Month</span>
        <span>April, 2024</span>
      </div>
      <div className={css.calendarList}>
        {CalendarNumbers.map(item => (
          <CalendarItem key={item} number={item} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
