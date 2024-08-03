import AddWaterBtn from "../AddWaterBtn/AddWaterBtn"
import ChooseDate from "../ChooseDate/ChooseDate"
import WaterList from "../WaterList/WaterList"
import css from './DailyInfo.module.css'

const DailyInfo = ({changeDate}) => {
  return (
    <div className={css.wraper}>
      <div className={css.container}> 
      <ChooseDate changeDate={changeDate}/>
      <AddWaterBtn containerClassName={css.addWaterBtn_container} buttonClassName={css.addWaterBtn} iconClassName={css.plus_icon} />  
      </div>
      <WaterList/>
    </div>
  )
}

export default DailyInfo