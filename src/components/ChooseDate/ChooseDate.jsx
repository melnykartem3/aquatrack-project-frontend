import { useEffect, useState } from 'react';
import { format, isSameDay } from 'date-fns';
import css from './ChooseDate.module.css';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const ChooseDate = ({ changeDate, openSetting }) => {
  const { t } = useTranslation();
  const [date, setDate] = useState(t('commonSecond.today'));

  useEffect(() => {
    const today = new Date();
    if (!changeDate || isSameDay(changeDate, today)) {
      setDate(t('commonSecond.today'));
    } else {
      setDate(format(changeDate, 'd, MMMM'));
    }
  }, [changeDate, t]);

  return (
    <>
      <h3
        className={clsx(css.title, {
          [css.openSettingMobileTitle]: openSetting,
        })}
      >
        {date}
      </h3>
    </>
  );
};

export default ChooseDate;
