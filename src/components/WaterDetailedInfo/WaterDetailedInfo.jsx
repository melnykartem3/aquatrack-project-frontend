import DailyInfo from "../DailyInfo/DailyInfo"
import MonthInfo from "../MonthInfo/MonthInfo"
import UserPanel from "../UserPanel/UserPanel"
import { useState } from "react"

const WaterDetailedInfo = () => {

  // стан з MonthInfo, обрана користувачем дата
  const [changeDate, setChangeDate] = useState(null);  

  // взяти стан з UserPanel, чи обраний Setting і при активації приховувти компонент ChooseDate в мобільній і AddButton в інших
  const [openSetting, setOpenSetting] = useState(false);

  //функція handleChange для зміни дати передати в monthInfo і викликати при onChange

   const handleDateChange = (event) => {
     setChangeDate(new Date(event));     
  }; 
  // console.log(handleDateChange());

  return (
    <section>
      <UserPanel setOpenSetting={setOpenSetting} />
      <DailyInfo changeDate={changeDate} openSetting={openSetting} />
      <MonthInfo handleDateChange={handleDateChange} />
    </section>
  );
}

export default WaterDetailedInfo