import { useEffect, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';

const MonthInfo = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarNumbers, setCalendarNumbers] = useState([]);
  const currentDateNow = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const changeMonth = increment => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + increment);
      return newDate;
    });
  };
  const currentMonthIndex = currentDate.getMonth(); 
  const currentMonth = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();

  const setToCurrentDate = () => {
    setCurrentDate(new Date());
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const lastDay = getDaysInMonth(currentYear, currentMonthIndex);

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= lastDay; i++) {
      numbers.push(i);
    }
    setCalendarNumbers(numbers);
  }, [lastDay]);

  return (
    <div className={css.containerCalendar}>
      <CalendarPagination
        changeMonth={changeMonth}
        currentMonth={currentMonth}
        currentYear={currentYear}
        setToCurrentDate={setToCurrentDate}
      />
      <Calendar
        CalendarNumbers={calendarNumbers}
        currentDate={currentDateNow}
        currentMonthIndex={currentMonthIndex}
        currentYear={currentYear}
      />
    </div>
  );
};

export default MonthInfo;
