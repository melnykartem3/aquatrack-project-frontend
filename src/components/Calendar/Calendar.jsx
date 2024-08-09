import { useSelector, useDispatch } from 'react-redux';
import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';
import { selectWater } from '../../redux/water/selectors';
import { selectWaterRate } from '../../redux/auth/selectors';
import { useEffect, useMemo } from 'react';
import { getWaterForMonth } from '../../redux/water/operations.js';

const Calendar = ({
  CalendarNumbers,
  currentDate,
  currentMonthIndex,
  currentYear,
  handleDateChange,
  selectedDate,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const month = `${currentYear}-${(currentMonthIndex + 1)
      .toString()
      .padStart(2, '0')}`;
    dispatch(getWaterForMonth(month));
  }, [dispatch, currentYear, currentMonthIndex]);

  const waterRate = useSelector(selectWaterRate) * 1000;
  const monthlyItems = useSelector(selectWater) || [];

  const calculateDayValue = dayData => {
    const value = (dayData.totalWaterVolume / waterRate) * 100;
    return value > 100 ? 100 : value;
  };

  const isToday = day =>
    day === currentDate.getDate() &&
    currentDate.getMonth() === currentMonthIndex &&
    currentDate.getFullYear() === currentYear;

  const isSelected = day =>
    selectedDate &&
    day === selectedDate.day &&
    currentMonthIndex === selectedDate.month &&
    currentYear === selectedDate.year;

  const CalendarObjects = useMemo(() => {
    return CalendarNumbers.map(day => {
      const dayData = monthlyItems.find(item => item.day === day);
      return {
        day,
        value: dayData ? calculateDayValue(dayData) : 0,
        isToday: isToday(day),
        isSelected: isSelected(day),
      };
    });
  }, [
    CalendarNumbers,
    monthlyItems,
    waterRate,
    currentDate,
    currentMonthIndex,
    currentYear,
    selectedDate,
  ]);

  return (
    <div className={css.calendarList}>
      {CalendarObjects.map((item, index) => (
        <CalendarItem
          key={index}
          number={item}
          currentMonthIndex={currentMonthIndex}
          currentYear={currentYear}
          handleDateChange={handleDateChange}
        />
      ))}
    </div>
  );
};

export default Calendar;
