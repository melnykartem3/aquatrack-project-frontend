import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';


const Calendar = ({
  CalendarNumbers,
  currentDate,
  currentMonthIndex,
  currentYear,
}) => {
  const currentDay = currentDate.getDate();
  const CalendarObjects = CalendarNumbers.map(day => ({
    day: day,
    value: day % 2 === 1 ? 100 : 60,
    isToday:
      day === currentDay &&
      currentDate.getMonth() === currentMonthIndex &&
      currentDate.getFullYear() === currentYear,
  }));

  return (
    <div className={css.calendarList}>
      {CalendarObjects.map((item, index) => (
        <CalendarItem key={index} number={item} />
      ))}
    </div>
  );
};

export default Calendar;
