import { useState, useMemo } from 'react';
import Calendar from '../Calendar/Calendar';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import css from './MonthInfo.module.css';
import Chart from '../Chart/Chart.jsx';
import { useSelector } from 'react-redux';
import { selectWater } from '../../redux/water/selectors.js';

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
  const [selectedDate, setSelectedDate] = useState({
    day: currentDateNow.getDate(),
    month: currentDateNow.getMonth(),
    year: currentDateNow.getFullYear(),
  });
  const [isActive, setIsActive] = useState(true);

  const monthlyItems = useSelector(selectWater);

  const currentMonthIndex = currentDate.getMonth();
  const currentMonth = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();

  const earliestRecordDate = useMemo(() => {
    if (monthlyItems.length > 0) {
      const earliestItem = monthlyItems.reduce((earliest, item) => {
        const itemDate = new Date(item.year, item.month - 1, item.day);
        return itemDate < earliest ? itemDate : earliest;
      }, new Date());
      return earliestItem;
    }
    return currentDateNow;
  }, [monthlyItems, currentDateNow]);

  const canNavigatePreviousMonth = useMemo(() => {
    const previousMonthDate = new Date(currentYear, currentMonthIndex);
    return previousMonthDate >= earliestRecordDate;
  }, [currentYear, currentMonthIndex, earliestRecordDate]);

  const changeMonth = increment => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + increment);
      return newDate;
    });
  };

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const calendarNumbers = useMemo(() => {
    const lastDay = getDaysInMonth(currentYear, currentMonthIndex);
    return Array.from({ length: lastDay }, (_, i) => i + 1);
  }, [currentYear, currentMonthIndex]);

  const handleDateChangeTemp = (day, month, year) => {
    const date = new Date(year, month, day);
    setSelectedDate({ year, month, day });
    handleDateChange(date);
  };

  const getWeeklyData = useMemo(() => {
    return Array.from({ length: 7 })
      .map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dayData = monthlyItems.find(item => item.day === date.getDate());
        return {
          name: date.getDate().toString(),
          uv: dayData ? dayData.totalWaterVolume / 1000 : 0,
        };
      })
      .reverse();
  }, [monthlyItems]);

  return (
    <div className={css.containerCalendar}>
      <CalendarPagination
        changeMonth={changeMonth}
        currentMonth={currentMonth}
        currentYear={currentYear}
        isActive={isActive}
        setIsActive={setIsActive}
        canNavigatePreviousMonth={canNavigatePreviousMonth}
      />
      {isActive ? (
        <Calendar
          CalendarNumbers={calendarNumbers}
          currentDate={currentDateNow}
          currentMonthIndex={currentMonthIndex}
          currentYear={currentYear}
          handleDateChange={handleDateChangeTemp}
          selectedDate={selectedDate}
        />
      ) : (
        <Chart data={getWeeklyData} />
      )}
    </div>
  );
};

export default MonthInfo;
