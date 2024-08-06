import { useEffect, useState } from "react";
import { format, isSameDay } from "date-fns";
import css from './ChooseDate.module.css'
import clsx from 'clsx';

const ChooseDate = ({ changeDate, openSetting }) => {
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
      <h3 className={clsx(css.title, { [css.openSettingMobileTitle]: openSetting })}>{date}</h3>
    </div>
  );
};

export default ChooseDate;