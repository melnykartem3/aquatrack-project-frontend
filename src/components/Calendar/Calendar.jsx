import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';
const CalendarNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const Calendar = () => {
  const CalendarObjects = CalendarNumbers.map(day => ({
    day: day,
    value: Math.floor(Math.random() * 100) + 1,
  }));

  return (
    <div className={css.calendarContainer}>
      <div className={css.calendarList}>
        {CalendarObjects.map(item => (
          <CalendarItem key={item} number={item} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
