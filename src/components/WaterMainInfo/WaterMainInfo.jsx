import AddWaterBtn from "../AddWaterBtn/AddWaterBtn"
import Logo from "../Logo/Logo"
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma"
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar"
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
    return (
        <section className={css.waterMainInfo_wrapper}>
        <Logo/>
        <WaterDailyNorma/>
        <WaterProgressBar />
        <AddWaterBtn containerClassName={css.addWaterBtn_container} buttonClassName={css.addWaterBtn} iconClassName={css.plus_icon}/>
      </section>
      
  )
}

export default WaterMainInfo