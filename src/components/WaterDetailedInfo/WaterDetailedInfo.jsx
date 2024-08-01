import DailyInfo from "../DailyInfo/DailyInfo"
import MonthInfo from "../MonthInfo/MonthInfo"
import UserPanel from "../UserPanel/UserPanel"

const WaterDetailedInfo = () => {
  return (
      <section>
          <UserPanel/>
          <DailyInfo/>
          <MonthInfo />
      </section>
  )
}

export default WaterDetailedInfo