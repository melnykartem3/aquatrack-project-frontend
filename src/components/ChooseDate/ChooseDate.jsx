import { useEffect, useState } from "react";
import { format, isSameDay } from "date-fns";
import css from './ChooseDate.module.css'

const ChooseDate = ({ changeDate }) => {
  const [date, setDate] = useState('today');
  

  useEffect(() => {
    const today = new Date();
    if (!changeDate || isSameDay(changeDate, today)) {
      setDate('today');
    } else {
      setDate(format(changeDate, 'd, MMMM'));
    }
  }, [changeDate]);

  return (
    <div>
      <h3 className={css.title}>{date}</h3>
    </div>
  );
};

export default ChooseDate;