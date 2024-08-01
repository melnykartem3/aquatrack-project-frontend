import AddWaterBtn from "../AddWaterBtn/AddWaterBtn"
import ChooseDate from "../ChooseDate/ChooseDate"
import WaterList from "../WaterList/WaterList"
import css from "./DailyInfo.module.css"
const DailyInfo = () => {
  return (
    <>
          <ChooseDate />
          <AddWaterBtn containerClassName={css.addWaterBtn_container} buttonClassName={css.addWaterBtn} iconClassName={css.plus_icon}/>
          <WaterList/>
    </>
  )
}

export default DailyInfo