import DailyInfo from "../DailyInfo/DailyInfo"
import MonthInfo from "../MonthInfo/MonthInfo"
import UserPanel from "../UserPanel/UserPanel"
import { useState } from "react"

const WaterDetailedInfo = () => {

  // взяти стан з UserPanel, чи обраний Setting і при активації приховувти компонент ChooseDate в мобільній і AddButton в інших
  
  // стан з MonthInfo, обрана користувачем дата
  const [changeDate, setChangeDate] = useState(null);  

  //функція handleChange для зміни дати
   const handleDateChange = (event) => {
    setChangeDate(new Date(event.target.value));
  }; 
  // передати в monthInfo і викликати при onChange

  return (
      <section>
          <UserPanel/>
          <DailyInfo changeDate={changeDate} />
          <MonthInfo />
      </section>
  )
}

export default WaterDetailedInfo