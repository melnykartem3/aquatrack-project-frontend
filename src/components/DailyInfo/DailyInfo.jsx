import AddWaterBtn from "../AddWaterBtn/AddWaterBtn"
import ChooseDate from "../ChooseDate/ChooseDate"
import WaterList from "../WaterList/WaterList"

const DailyInfo = () => {
  return (
    <>
          <ChooseDate />
          <AddWaterBtn />
          <WaterList/>
    </>
  )
}

export default DailyInfo