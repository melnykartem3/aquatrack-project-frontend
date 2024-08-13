import DailyInfo from '../DailyInfo/DailyInfo';
import MonthInfo from '../MonthInfo/MonthInfo';
import UserPanel from '../UserPanel/UserPanel';
import { useState } from 'react';

const WaterDetailedInfo = ({ userId }) => {
  const [changeDate, setChangeDate] = useState(null);

  const [openSetting, setOpenSetting] = useState(false);

  const handleDateChange = event => {
    setChangeDate(new Date(event));
  };

  return (
    <section>
      <UserPanel setOpenSetting={setOpenSetting} />
      <DailyInfo
        changeDate={changeDate}
        openSetting={openSetting}
        userId={userId}
      />
      <MonthInfo handleDateChange={handleDateChange} />
    </section>
  );
};

export default WaterDetailedInfo;
