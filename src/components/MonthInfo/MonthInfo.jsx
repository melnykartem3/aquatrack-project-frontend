import { useEffect, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';

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

const MonthInfo = ({ handleDateChange }) => {
  const currentDateNow = new Date();
  const [currentDate, setCurrentDate] = useState(currentDateNow);
  const [calendarNumbers, setCalendarNumbers] = useState([]);
  const [selectedDate, setSelectedDate] = useState({
    day: currentDateNow.getDate(),
    month: currentDateNow.getMonth(),
    year: currentDateNow.getFullYear(),
  });

  const day = currentDateNow.getDate();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonth = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();

  const changeMonth = increment => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + increment);
      return newDate;
    });
  };
  

  const setToCurrentDate = () => {
    setCurrentDate(new Date());
    setSelectedDate({ day, currentMonthIndex, currentYear });
    handleDateChange(new Date());
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

  const handleDateChangeTemp = (day, month, year) => {
    const date = new Date(year, month, day);
    setSelectedDate({ year, month, day });
    handleDateChange(date);
  };

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
        handleDateChange={handleDateChangeTemp}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default MonthInfo;
