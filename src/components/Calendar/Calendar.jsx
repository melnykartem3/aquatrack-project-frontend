import { useSelector, useDispatch } from 'react-redux';
import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';
import { selectWater } from '../../redux/water/selectors';
import { selectWaterRate } from '../../redux/auth/selectors';
import { useEffect } from 'react';
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

  const month = `${currentYear}-${(currentMonthIndex + 1)
    .toString()
    .padStart(2, '0')}`;

  useEffect(() => {
    dispatch(getWaterForMonth(month));
  }, [dispatch, month]);

  const waterRate = useSelector(selectWaterRate) * 1000;
  const monthlyItems = useSelector(selectWater);

  const currentDay = currentDate.getDate();
  const CalendarObjects = CalendarNumbers.map(day => {
    const dayData = monthlyItems.find(item => item.day === day);

    return {
      day: day,
      value: dayData
        ? Math.min((dayData.totalWaterVolume / waterRate) * 100, 100).toFixed(0)
        : 0,
      isToday:
        day === currentDay &&
        currentDate.getMonth() === currentMonthIndex &&
        currentDate.getFullYear() === currentYear,
      isSelected:
        selectedDate &&
        day === selectedDate.day &&
        currentMonthIndex === selectedDate.month &&
        currentYear === selectedDate.year,
    };
  });

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
